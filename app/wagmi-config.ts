import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  base,
  optimism,
  polygon,
  zora,
  arbitrum
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Universal Agent Minter',
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || 'YOUR_PROJECT_ID', // Fallback to placeholder if env var is missing
  chains: [
    mainnet,
    base,
    optimism,
    polygon,
    zora,
    arbitrum
  ],
  ssr: false, // Disable SSR to avoid indexedDB errors during build
});
