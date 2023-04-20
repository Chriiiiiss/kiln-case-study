interface RewardComponentProps {
  ETHPrice: number;
  inputValue: number;
}

const RewardComponent: React.FC<RewardComponentProps> = ({
  ETHPrice,
  inputValue,
}) => {
  return (
    <div className="text-white flex flex-col gap-y-8">
      <p>
        {ETHPrice} {inputValue}
      </p>
      <div className="flex justify-between">
        <span>Daily</span>
        <span>
          <span>ETH</span>
        </span>
        <span>
          <span>$</span>
        </span>
      </div>
      <div className="flex justify-between">
        <span>Monthly</span>
        <span>
          <span>ETH</span>
        </span>
        <span>
          <span>$</span>
        </span>
      </div>
      <div className="flex justify-between">
        <span>Yearly</span>
        <span>
          <span>ETH</span>
        </span>
        <span>
          <span>$</span>
        </span>
      </div>
    </div>
  );
};

export default RewardComponent;
