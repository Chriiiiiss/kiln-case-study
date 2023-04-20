import { formatNumber, formatPrice } from "@/src/utils";
interface RewardComponentProps {
  ETHPrice: number;
  inputValue: number;
}

const calcETHYearlyReward = (inputValue: number) => {
  return (inputValue * 5) / 100;
};

const RewardComponent: React.FC<RewardComponentProps> = ({
  ETHPrice,
  inputValue,
}) => {
  let YearlyETHReward = calcETHYearlyReward(inputValue);

  return (
    <div className="text-white flex flex-col gap-y-8">
      <p>
        {ETHPrice} {inputValue}
      </p>
      <div className="flex justify-between">
        <span>Daily</span>
        <div className="flex gap-x-2">
          <span>{formatNumber(YearlyETHReward / 365)}</span>
          <span>ETH</span>
        </div>
        <div className="flex gap-x-2">
          <span>{formatPrice((YearlyETHReward / 365) * ETHPrice)}</span>
          <span>$</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span>Monthly</span>
        <div className="flex gap-x-2">
          <span>{formatNumber(YearlyETHReward / 12)}</span>
          <span>ETH</span>
        </div>
        <div className="flex gap-x-2">
          <span>{formatPrice((YearlyETHReward / 12) * ETHPrice)}</span>
          <span>$</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span>Yearly</span>
        <div className="flex gap-x-2">
          <span>{formatNumber(YearlyETHReward)}</span>
          <span>ETH</span>
        </div>
        <div className="flex gap-x-2">
          <span>{formatPrice(YearlyETHReward * ETHPrice)}</span>
          <span>$</span>
        </div>
      </div>
    </div>
  );
};

export default RewardComponent;
