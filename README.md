# create-chrome-ext

A CLI tool to quickly set up a new Chrome Extension project with a single command.

## Usage

To create a new Chrome Extension project, run the following command in your terminal:

```bash
npx create-chrome-ext [project-name]
```

Replace `[project-name]` with the desired name for your project. The CLI will guide you through the setup process.

## Features

- **Interactive Interface**: A user-friendly command-line interface to guide you through project setup.
- **Multiple Templates**: Choose from a variety of popular templates to get started quickly.
- **Automatic Dependency Installation**: All necessary dependencies are installed automatically.
- **Quick Setup**: Go from zero to a working Chrome Extension in seconds.

## Available Templates

- **Vanilla JS**: A basic template with no frameworks, just plain JavaScript, HTML, and CSS.
- **React + Vite**: A template for building your extension with React and Vite for a fast development experience.
- **React + Next.js**: A template using Next.js for building a more complex extension with server-side rendering capabilities.

## Example

Here is an example of running the CLI and the success message you can expect:

```bash
$ npx create-chrome-ext my-awesome-extension

? Select a template: › Vanilla JS
✔ Copied template files.
✔ Installed dependencies.

✅ Success! Your new Chrome Extension project is ready in the "my-awesome-extension" directory.
```
