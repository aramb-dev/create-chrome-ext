# My React + Next.js Chrome Extension

This is a Chrome extension built with React and Next.js.

## Getting Started

### Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Bundles the extension for production into the `out` directory.

### Important Note on Build Process

The build process includes a post-build script to ensure the Next.js output is compatible with Chrome extensions.

### Loading the Extension in Chrome

1.  Run the command `npm run build`.
2.  Navigate to `chrome://extensions`.
3.  Enable "Developer mode".
4.  Click "Load unpacked".
5.  Select the `out` directory that was created by the build command.
