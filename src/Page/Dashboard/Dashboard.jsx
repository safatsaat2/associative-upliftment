const Dashboard = () => {
  return (
    <div className="lg:flex">
      <div className="w-1/4 hidden lg:flex flex-col items-center h-screen sticky top-0 bg-white shadow">
        <div>
        <img
          className="mt-14"
          src="https://i.ibb.co/3hytLnv/Group-51.png"
          alt="LOGO"
        />
        
          <p className="mt-14 text-2xl font-medium cursor-pointer hover:bg-black hover:text-white mr-4 rounded-md px-3 py-2">Home</p>
          <p className="mt-10 text-2xl font-medium cursor-pointer hover:bg-black hover:text-white mr-4 rounded-md px-3 py-2">Active Order</p>
          <p className="mt-10 text-2xl font-medium cursor-pointer hover:bg-black hover:text-white mr-4 rounded-md px-3 py-2">Orders</p>
          <p className="mt-10 text-2xl font-medium cursor-pointer hover:bg-black hover:text-white mr-4 rounded-md px-3 py-2">Your Offers</p>
          <p className="mt-10 text-2xl font-medium cursor-pointer hover:bg-black hover:text-white mr-4 rounded-md px-3 py-2">New Orders</p>
          <p className="mt-10 text-2xl font-medium cursor-pointer hover:bg-black hover:text-white mr-4 rounded-md px-3 py-2">Service</p>

        </div>
      </div>
      <div className="w-full lg:w-3/4 bg-slate-100 ">Hi</div>
    </div>
  );
};

export default Dashboard;
