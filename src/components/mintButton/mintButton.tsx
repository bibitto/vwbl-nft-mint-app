import { Button } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { providerOptions } from '../../../providerOptions';
import { useStyles } from './mintButton.style';

export const MintButton = (prop) => {
  const [isVerified, setIsVerified] = useState(false);
  const provider = prop.provider;
  const classes = useStyles();

  const signMinting = async () => {
    const signer = await provider.getSigner();
    const message = 'Please sign to mint a VWBL NFT.';
    const address = await signer.getAddress();
    const signature = await signer.signMessage(message);

    const response = await fetch('/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ message, address, signature }),
    });

    const body = await response.json();
    setIsVerified(body.isVerified);
  };
  return (
    <>
      <Button className={classes.mintButton} onClick={signMinting}>
        会社案内を受け取る
      </Button>
      {isVerified && <p>verified!</p>}
    </>
  );
};
