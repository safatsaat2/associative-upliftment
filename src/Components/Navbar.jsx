import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/services" },
  { name: "Strategy", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Telent", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const signOut = () => {
    logOut().then(() => {
      alert(" User Has Log out");
    });
  };

  return (
    <>
      <div className="hidden bg-black lg:block">
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : " text-white",
                "rounded-md ml-16 my-2 text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>


      <div className="block lg:hidden">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className=" px-2 bg-black sm:px-2 lg:px-0">
                <div className="relative flex bg-black h-12 items-center gap-x-[15px]">
                  <div className=" inset-y-0 left-0 bg-black flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex bg-black items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block text-white h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block text-white h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex items-center justify-between w-full bg-black">
                    <div className="flex items-center gap-x-10">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://i.ibb.co/ftfR2G9/LOGO-1.png"
                        alt="Your Company"
                      />
                      <div>
                        {user ? (
                          <>
                            <Link to='dashboard' className="text-[#414141] hover:bg-black hover:text-white mr-4 rounded-md px-3 py-2 text-sm font-medium">Dashboard</Link>
                            <button
                              onClick={logOut}
                              className="bg-[#149CE6] text-black rounded-lg p-2 lg:w-[217px] lg:h-[48px]"
                            >
                              Logout
                            </button>
                          </>
                        ) : (
                          <>

                            <div className="flex gap-x-[10px]">

                              <Link to="/login">
                                <div className='border border-[#149CE6] px-3 py-1 text-white rounded-md text-md cursor-pointer hover:bg-black hover:text-white'>
                                  Log in
                                </div>
                              </Link>
                              <Link to="/signup">
                                <div className='bg-[#149CE6] text-black rounded-lg px-3 py-1 lg:w-[217px] lg:h-[48px]'>
                                  Join
                                </div>
                              </Link>

                            </div>

                          </>
                        )}
                      </div>
                      {/* <img
                    className="hidden w-auto lg:block"
                    src="https://i.ibb.co/XS17NWx/au-logo-03-1.png"
                    alt="Your Company"
                  /> */}
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4 mr-10">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : " text-white",
                              "rounded-md px-3 py-4 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 bg-black ">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>


    </>
  );
};

export default Navbar;
