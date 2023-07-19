import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Service", href: "services" },
  { name: "About", href: "about" },
  { name: "Contact", href: "#" },
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
    <Disclosure as="nav" className="pt-6">
      {({ open }) => (
        <>
          <div className="lg:mx-[78px] max-w-7xl px-2 sm:px-2 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex  items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://i.ibb.co/S09RC71/au-logo-02-1.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden w-auto lg:block"
                    src="https://i.ibb.co/S09RC71/au-logo-02-1.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-[#414141] hover:bg-black hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  {user ? (
                    <>
                     <Link to='dashboard' className="text-[#414141] hover:bg-black hover:text-white mr-4 rounded-md px-3 py-2 text-sm font-medium">Dashboard</Link>
                      <button
                        onClick={signOut}
                        className="bg-black text-white rounded-lg lg:w-[217px] lg:h-[48px]"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/signup">
                        <button className="bg-black text-white rounded-lg lg:w-[217px] lg:h-[48px]">
                          Get Started
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-[#414141] hover:bg-gray-700 hover:text-white",
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
  );
};

export default Navbar;
