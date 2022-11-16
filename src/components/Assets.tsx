import React from "react";
import bitCoinImage from "../image/Bitcoin SV (BSV).png";
import binanceImage from "../image/Binance Coin (BNB).png";
import ethereumImage from "../image/Ethereum (ETH) (1).png";
import solanaImage from "../image/Solana (SOL).png";

import AssetCard from "./AssetCard";

function Assets() {
  interface digitalAssetStruct{
    name : string;
    image: string;
    statement: number;
    percentage: number;
    price: number;
    tvl: Array<string> ;
  }
  const digitalAssetList : digitalAssetStruct[]  = [
    {
      name: "Bitcoin (BTC)",
      image : bitCoinImage,
      statement: 31812.80,
      percentage: 10,
      price: 60000,
      tvl: [solanaImage, ethereumImage, binanceImage],
    },
    {
      name: "Solana (SOL)",
      image : solanaImage,
      statement: 32.83,
      percentage: -12.32,
      price: 60000,
      tvl: [bitCoinImage, ethereumImage, binanceImage],
    },
    {
      name: "Ethereum (ETH)",
      image : ethereumImage,
      statement: 1.00,
      percentage: -11.93,
      price: 60000,
      tvl: [solanaImage, bitCoinImage, binanceImage],
    },
    {
      name: "Binance USD (BUSD)",
      image : binanceImage,
      statement: 1.00,
      percentage: 0.26,
      price: 60000,
      tvl: [solanaImage, ethereumImage, binanceImage],
    },
  ];
  return (
    <div className="items-center mt-[13%]">
        <div className="grid grid-cols-4 gap-2">
        {
            digitalAssetList && digitalAssetList.map((digitalAsset: digitalAssetStruct) => {
                return <AssetCard key={digitalAsset.name} {...digitalAsset} />
            })
        }
        </div>
    </div>
  );
}

export default Assets;
