import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiConfig, createClient } from 'wagmi';
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from 'connectkit';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

const alchemyId = 'dHLNcpn54aOoJbVXlvEEQuLm8Nax1DIi';

const client = createClient(
  getDefaultClient({
    appName: 'Mirror Exercise',
    alchemyId,
  }),
);

root.render(
  <StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <ConnectKitButton />
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </StrictMode>,
);
