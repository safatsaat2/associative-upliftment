

const Dashboard = () => {

  return (
    <div className="">
      {/* First line of dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="py-20 px-14 bg-white dashShadow rounded-[10px]">
          <p className="text-center text-[96px] leading-[116px]">$00</p>
          <p className="text-center text-2xl leading-[29px]">Balance</p>
        </div>
        <div className="bg-white dashShadow rounded-[10px] hidden lg:block"></div>
        <div className="bg-white dashShadow rounded-[10px] flex flex-col justify-center items-center">
          <p className="text-center py-4 font-semibold text-xl">ACTIVATE YOUR ACCOUNT</p>
          <button className="text-2xl font-semibold bg-[#FFE500] rounded-[10px] px-14 py-4 mb-4">ACTIVE</button>
        </div>
      </div>

      {/* Second line of dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white col-span-2 dashShadow rounded-[10px] py-10">
          <h4 className="ml-4 text-2xl font-bold">TRANSACTION</h4>
        </div>
        <div className="bg-white dashShadow rounded-[10px] py-10">
          <h4 className="ml-4 text-2xl font-bold">OUR CLIENTS</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
