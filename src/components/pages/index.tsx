import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { providerOptions } from '../../../providerOptions';
import { ConnectComponent } from './connect/connect';
import { MintComponent } from './mint/mint';

export const Home = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null | undefined>();
  const [account, setAccount] = useState<string | null | undefined>();
  const [chainId, setChainId] = useState<number | null | undefined>();

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
      });
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const accounts = await provider.listAccounts();
      const account = accounts[0];
      const network = await provider.getNetwork();
      const chainId = network.chainId;
      setProvider(provider);
      setAccount(account);
      setChainId(chainId);
    } catch (error) {
      alert(error);
    }
  };

  const userStates = { provider, account, chainId };

  return (
    <>
      {account ? (
        <MintComponent {...userStates} />
      ) : (
        <ConnectComponent connectWallet={connectWallet} />
      )}
    </>
  );
};
