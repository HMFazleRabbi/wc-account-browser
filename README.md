Sure! Here's the updated response with the troubleshooting section:

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

   **@wagmi/core:** `@wagmi/core` is a VanillaJS library containing everything you need to start working with Ethereum. It makes it easy to "Connect Wallet," display ENS and balance information, sign messages, interact with contracts, and much more.

Once you have all the dependencies installed, you can start the development server and run the project locally with the following command:

```bash
npm start
```

The project should now be accessible at `http://localhost:3000` in your web browser.

## Troubleshooting

If you encounter any issues while running the project, you can try the following troubleshooting steps:

1. **Clear Browser Cache:** Sometimes, cached data in your browser can interfere with the application's behavior. Try clearing your browser cache and reloading the page.

2. **Run in Incognito Mode:** Running the application in incognito mode (or private browsing mode) can help identify whether the issue is related to cached data or browser extensions.

3. **Clear Activity Tab Data in MetaMask:** If you're using MetaMask for Ethereum interactions, clearing the activity tab data in MetaMask might resolve certain wallet-related issues.

If the issues persist or are not related to the above troubleshooting steps, please check the official documentation for each package, verify your code, and seek help in the project's repository or community forums.

Feel free to customize this section to include any other troubleshooting steps that might be relevant to your specific project.


------
### Sample Pages:

![wc1](https://github.com/HMFazleRabbi/wc-account-browser/assets/55730363/c3a5680c-8f10-4cbc-b18a-80ab6d5bfdce)
![wc2](https://github.com/HMFazleRabbi/wc-account-browser/assets/55730363/cccfe830-020c-43ad-9db9-c2080dc3aa2a)
![wc3](https://github.com/HMFazleRabbi/wc-account-browser/assets/55730363/7a048496-27a4-4d95-b133-ea6807742f81)

