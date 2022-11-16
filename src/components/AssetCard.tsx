import React from "react";
import vectorImage from "../image/vector.png";

interface digitalAssetStruct{
  name : string;
  image: string;
  statement: number;
  percentage: number;
  price: number;
  tvl: Array<string> ;
}

function AssetCard(assetdata: digitalAssetStruct) {
  return (
    <div>
      <div className="relative z-10">
        <div className="absolute left-[6.6rem] top-[-28px] bg-card-header-icon rounded-full p-4">
          <img src={assetdata.image} alt="" className="w-12 h-12" />
        </div>
        <img src={vectorImage} alt="" />
        <div className="absolute left-8 top-16 z-20">
          <div className="flex flex-col gap-2 items-center text-center">
            <span className="card-light-text">
              {assetdata.name}
            </span>
            <span className="card-highlight-text relative">
              <span>
                {assetdata.statement}
                <span className="text-[#FF4D4D] absolute right-3">
                  {assetdata.percentage > 0 ? (
                    <span className="text-profit">
                      + {assetdata.percentage}  %
                    </span>
                  ) : (
                    <span className="text-loss">
                      {assetdata.percentage}  %
                    </span>
                  )}
                 
                </span>
              </span>
            </span>
            <span className="card-light-text">price</span>
            <span className="card-highlight-text">
              ${assetdata.price}
            </span>
            <span className="card-light-text">TVL</span>
            <span className="card-highlight-text flex gap-2 justify-center items-center">
              {assetdata.tvl.map((tvlImage: any) => {
                return <img src={tvlImage} alt="" className="w-5 h-5" />;
              })}
            </span>
            <span className="card-light-text">Popular Plans</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetCard;
