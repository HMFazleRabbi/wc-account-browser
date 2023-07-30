import './App.css';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import Profile from './Profile';

// Extract API keys from environment variables
const infuraApiKey = "ae891e481aba4cb492604b551481c8cb";
const walletConnectProjectId = "798e6251cecb5d1c1d3ee54d1f71e24b";

// Set up the providers and chains configuration with Alchemy and Infura providers
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [infuraProvider({ apiKey: infuraApiKey }), publicProvider()]
);

// Set up wagmi configuration
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: walletConnectProjectId,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),

  ],
  publicClient,
  webSocketPublicClient,
});

function App() {
  return (
    // Wrap the Profile component with the WagmiConfig provider to pass the config down the component tree
    <WagmiConfig config={config}>
      <Profile />
    </WagmiConfig>
  );
}

export default App;
