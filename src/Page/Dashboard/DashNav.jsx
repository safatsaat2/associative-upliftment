import { Link } from "react-router-dom";

const DashNav = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-1/4 hidden lg:flex flex-col items-center rounded-none sticky top-0 bg-black shadowDash">
      <div>
        <img
          className="mt-7"
          src="https://i.ibb.co/Wkb6rt0/Group-51-1.png"
          alt="LOGO"
        />

        <Link to="/dashboard" onClick={toTop}>
          <p className="mt-10 text-md text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">
            Home
          </p>
        </Link>
        <p className="mt-1 text-md text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">
          Active Order
        </p>
        <Link to= "/dashboard/neworder" onClick={toTop}>
        <p className="mt-1 text-md text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">
          New Order
        </p>
        </Link>
        <Link to= "order" onClick={toTop}>
        <p className="mt-1 text-md text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">
          Orders
        </p>
        </Link>
        <p className="mt-1 text-md text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">
          Your Offers
        </p>
        <Link to="/dashboard/services" onClick={toTop}>
          <p className="mt-1 text-md text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">
            Service
          </p>
        </Link>
        <p className="mt-1 text-md text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">
          Ticket
        </p>
        <p className="mt-1 text-md text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">
          Complain Box
        </p>
        <p className="mt-1 text-md text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">
          Advise Box
        </p>
        <Link to='/' onClick={toTop}>
          <p className="my-10 text-md text-white font-medium cursor-pointer hover:bg-white hover:text-black mr-4 rounded-md px-3 py-2">
            Go to Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default DashNav;
