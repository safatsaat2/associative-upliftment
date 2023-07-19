

const DashNav = () => {
    return (
        <div className="w-1/4 hidden lg:flex flex-col items-center rounded-none sticky top-0 bg-black shadowDash">
        <div>
        <img
          className="mt-7"
          src="https://i.ibb.co/Wkb6rt0/Group-51-1.png"
          alt="LOGO"
        />
        
          <p className="mt-14 text-2xl text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">Home</p>
          <p className="mt-10 text-2xl text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">Active Order</p>
          <p className="mt-10 text-2xl text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">Orders</p>
          <p className="mt-10 text-2xl text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">Your Offers</p>
          <p className="mt-10 text-2xl text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">Service</p>
          <p className="mt-10 text-2xl text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">Ticket</p>
          <p className="mt-10 text-2xl text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">Complain Box</p>
          <p className="mt-10 text-2xl text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">Advise Box</p>

        </div>
      </div>
    );
};

export default DashNav;