## Dependencies Installation

To run this project locally, you'll need to have the following dependencies installed on your system:

1. **Node.js and npm (Node Package Manager):** You can download and install Node.js from the official website [here](https://nodejs.org/). npm is included with Node.js, so once Node.js is installed, npm will be available too.

2. **Create React App:** This project is built using Create React App, which is a tool that helps you set up a modern React application with no build configuration. To install Create React App, run the following command:

   ```bash
   npm install create-react-app
   ```

3. **@wagmi/core, viem, and wagmi:** Additionally, install the required packages for this project with the following command:

   ```bash
   npm install @wagmi/core viem wagmi --legacy-peer-deps
   ```

   **Note on `--legacy-peer-deps`:** The `--legacy-peer-deps` flag is used to instruct npm to use the older, more permissive peer dependency algorithm instead of the stricter one introduced in npm version 7. This flag is helpful in certain scenarios where older packages or dependencies rely on the legacy behavior. However, it's generally recommended to update packages to support the newer peer dependency algorithm for a more robust and maintainable package ecosystem.

Once you have all the dependencies installed, you can start the development server and run the project locally with the following command:

```bash
npm start
```

The project should now be accessible at `http://localhost:3000` in your web browser.

If you encounter any issues during the installation or running of the project, please check the official documentation for each package or seek help in the project's repository.

Feel free to customize this section to include other dependencies if your project requires additional packages or tools.