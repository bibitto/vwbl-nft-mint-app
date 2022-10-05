import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { providerOptions } from '../../../../providerOptions';
import { LogoDisplay } from '../../common/logoDisplay';
import { MintButton } from './components/mintButton/mintButton';
import { useStyles } from './mint.style';

type Props = {
  provider: ethers.providers.Web3Provider | null | undefined;
  account: string | null | undefined;
  chainId: number | null | undefined;
};

export const MintComponent = (props: Props) => {
  const { provider, account, chainId } = props;

  const POLYGON_CHAIN_ID = 0;

  const setPolygonNetwork = () => {};

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <LogoDisplay />
      <div className={classes.content}>
        <div>
          <h2>VWBL（ビュアブル）を使ってみましょう!</h2>
        </div>
        <p>
          受け取るボタンをクリックすると、Mint（NFTを新たに作成すること）します。 Mint
          は無料で行なえます！
        </p>
        <MintButton provider={provider} />
        {account ? (
          <div>Wallet Adddress: {account.slice(0, 7) + '...' + account.slice(-8, -1)}</div>
        ) : (
          <div>ウォレットが接続れていません</div>
        )}
        <p>
          ※通常、Mintにはガス代（ブロックチェーンに取引を記録する手数料）が必要です。今回は暗号屋がガス代を負担します。暗号屋に興味をもって頂きありがとうございます!
        </p>
      </div>
    </div>
  );
};
