const CustomButton = () => {
  return (
    <div className="poligon neutral">
      <button className="text-sm font-normal text-white flex items-center">
        <div className="mr-5">
          <h5>Current Bid</h5>
          <h6 className="text-gray-400">0.99 eth</h6>
        </div>
        <div className="mr-5">
          <h5>Current Bid</h5>
          <h6 className="text-gray-400">25 hrs</h6>
        </div>
        <div className="poligon grad">
          <button className="text-sm text-white">Start Bid</button>
        </div>
      </button>
    </div>
  );
};

export default CustomButton;
