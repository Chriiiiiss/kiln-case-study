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
  let yearlyETHReward = calcETHYearlyReward(inputValue);
  let dailyRewards = calcETHYearlyReward(inputValue) / 365;
  let monthlyRewards = calcETHYearlyReward(inputValue) / 12;

  return (
    <div className="text-white flex flex-col gap-y-8">
      <div className="flex justify-between">
        <span className="w-10">Daily</span>
        <div className="flex gap-x-2">
          <span>{formatNumber(dailyRewards, 3)}</span>
          <span>ETH</span>
        </div>
        <div className="flex gap-x-2">
          <span>{formatPrice(dailyRewards * ETHPrice)}</span>
          <span>$</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="w-10">Monthly</span>
        <div className="flex gap-x-2">
          <span>{formatNumber(monthlyRewards)}</span>
          <span>ETH</span>
        </div>
        <div className="flex gap-x-2">
          <span>{formatPrice(monthlyRewards * ETHPrice)}</span>
          <span>$</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="w-10">Yearly</span>
        <div className="flex gap-x-2">
          <span>{formatNumber(yearlyETHReward)}</span>
          <span>ETH</span>
        </div>
        <div className="flex gap-x-2">
          <span>{formatPrice(yearlyETHReward * ETHPrice)}</span>
          <span>$</span>
        </div>
      </div>
    </div>
  );
};

export default RewardComponent;
