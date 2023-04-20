interface InputEthComponentProps {
  onValueChange: (value: string) => void;
}

const InputEthComponent: React.FC<InputEthComponentProps> = ({
  onValueChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onValueChange(value);
  };

  return (
    <div className="flex gap-y-8 flex-col">
      <div className="flex justify-between">
        <h2 className="text-5xl font-normal leading-normal mt-0 text-white">
          Staked ETH
        </h2>
        <p className="flex align-center text-3xl font-normal leading-normal mt-0 text-white text-center">
          APY 5%
        </p>
      </div>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        placeholder="0"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputEthComponent;
