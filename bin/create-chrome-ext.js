#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execa } from 'execa';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name('create-chrome-ext')
  .description('CLI to create a new Chrome Extension project')
  .argument('[project-name]', 'The name of the project')
  .option('-o, --overwrite', 'Force overwrite of existing directory')
  .action(run);

program.parse(process.argv);

async function run(projectName, options) {
  let project = projectName;
  let projectPath;

  try {
    if (!project) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'What is the name of your project?',
          validate: (input) => (input ? true : 'Project name cannot be empty.'),
        },
      ]);
      project = answers.projectName;
    }

    projectPath = path.resolve(process.cwd(), project);

    if (fs.existsSync(projectPath)) {
      if (options.overwrite) {
        fs.emptyDirSync(projectPath);
      } else {
        const { overwrite } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'overwrite',
            message: `Directory "${project}" already exists. Overwrite?`,
            default: false,
          },
        ]);

        if (!overwrite) {
          console.log(chalk.yellow('Operation cancelled.'));
          process.exit(0);
        }

        fs.emptyDirSync(projectPath);
      }
    }

    const { template } = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Choose a project template:',
        choices: ['vanilla-js', 'react-vite', 'react-next'],
      },
    ]);

    const templateDir = path.resolve(__dirname, '..', 'templates', template);

    console.log(chalk.blue(`Creating project in ${projectPath}...`));
    await fs.copy(templateDir, projectPath);

    // Customize package.json
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = project;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    // Customize manifest.json
    let manifestPath;
    if (template === 'vanilla-js') {
      manifestPath = path.join(projectPath, 'manifest.json');
    } else {
      manifestPath = path.join(projectPath, 'public', 'manifest.json');
    }
    const manifestJson = await fs.readJson(manifestPath);
    manifestJson.name = project;
    manifestJson.description = `A Chrome extension built with ${project}`;
    await fs.writeJson(manifestPath, manifestJson, { spaces: 2 });

    console.log(chalk.blue('Installing dependencies...'));
    await execa('npm', ['install'], { cwd: projectPath, stdio: 'inherit' });

    console.log(chalk.blue('Initializing Git repository...'));
    await execa('git', ['init'], { cwd: projectPath });

    console.log(chalk.green('\nSuccess! Your project is ready.'));
    console.log(chalk.green(`\nTo get started, run the following commands:`));
    console.log(chalk.cyan(`  cd ${project}`));
    console.log(chalk.cyan(`  npm run dev`));
  } catch (error) {
    if (error.constructor.name === 'ExitPromptError') {
      console.log(chalk.yellow('Operation cancelled.'));
      process.exit(0);
    } else {
      console.error(chalk.red('An error occurred during project creation:'));
      console.error(error);
      // Clean up created directory on error
      if (projectPath && fs.existsSync(projectPath)) {
        fs.removeSync(projectPath);
      }
      process.exit(1);
    }
  }
}