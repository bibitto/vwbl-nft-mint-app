import { Button } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { providerOptions } from '../../../../../../providerOptions';
import { useStyles } from './mintButton.style';

type Props = {
  provider: ethers.providers.Web3Provider | null | undefined;
};

export const MintButton = (props: Props) => {
  const [isVerified, setIsVerified] = useState(false);
  const classes = useStyles();
  const provider = props.provider;

  const signMinting = async () => {
    try {
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
    } catch (err) {
      console.log(err);
    }
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
