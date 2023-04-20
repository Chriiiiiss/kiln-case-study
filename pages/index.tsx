import React, { useEffect } from "react";
import InputEthComponent from "@/components/InputEthComponent";
import RewardComponent from "@/components/RewardComponent";
import { fetchEthPrice } from "@/src/lib/api";
import { useQuery } from "react-query";

const Home = () => {
  const [inputValue, setInputValue] = React.useState<number>(0);
  const [ETHPrice, setETHPrice] = React.useState<number>(0);
  const { data, error, isLoading } = useQuery("eth", fetchEthPrice);

  useEffect(() => {
    if (!isLoading && data) {
      setETHPrice(data.ethereum.usd);
    }
  }, [isLoading, data, error]);

  return (
    <>
      <main className="p-10 flex flex-col gap-y-8">
        <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-white">
          ETH staking rewards calculator
        </h1>
        <InputEthComponent onValueChange={setInputValue} />
        <div>
          <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-white">
            Rewards
          </h2>
          {isLoading && <p className="text-white">Loading...</p>}
          {error && !isLoading ? (
            <p className="text-red-800">Failed to fetch the API</p>
          ) : (
            <RewardComponent ETHPrice={ETHPrice} inputValue={inputValue} />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
