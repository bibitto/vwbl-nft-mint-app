import React from 'react';
import { Button, Link } from '@mui/material';
import { useStyles } from './connect.style';
import { LogoDisplay } from '../../common/logoDisplay';

type Prop = {
  connectWallet: () => void;
};

export const ConnectComponent = (prop: Prop) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <LogoDisplay />
      <div className={classes.content}>
        <div>
          <h2>VWBL（ビュアブル）を試してみませんか？</h2>
        </div>
        <div>
          いまなら無料でNFTが受け取れます!
          暗号屋がガス代（ブロックチェーンに取引を記録する手数料）を負担します.
          暗号屋の会社案内のPDFがNFTで受け取れます。いつかこのNFTが、役立つ日が来るかもしれません...！！？？！
        </div>
        <div className={classes.connectWalletCard}>
          <div>イーサリアムウォレットをお持ちの方</div>
          <p>ウォレットを接続し、VWBL（ビュアブル）をお試しください</p>
          <Button className={classes.connectButton} onClick={prop.connectWallet}>
            ウォレットを接続
          </Button>
        </div>
        <div className={classes.installWalletCard}>
          <div>イーサリアムウォレットをお持ちでない方</div>
          <div>
            <p>
              NFTの受け取るにはイーサリアムウォレットが必要です。この機会にWalletを使ってみませんか？
            </p>
            <p>
              イーサリアムウォレットとは、銀行を介さないインターネットバンキングアプリのようなものと考えてください。残高を読み取ったり、NFTの取引をしたり、アプリケーションに接続したりできます。
            </p>
            <a href="">くわしく知りたい方</a>
          </div>
          <Button variant="outlined" className={classes.installWalletButton}>
            ウォレットを入手
          </Button>
        </div>
      </div>
    </div>
  );
};
