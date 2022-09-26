import WalletConnect from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: 'Web 3 Modal Demo', // Required
      infuraId: 'cc20159d7d2b4340b14cbfc60b7bc3a0', //process.env.NEXT_APP_INFURA_KEY, // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: 'cc20159d7d2b4340b14cbfc60b7bc3a0', //process.env.NEXT_APP_INFURA_KEY, // required
    },
  },
};
