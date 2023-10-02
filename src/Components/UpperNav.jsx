import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const UpperNav = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <>
      <div className='lg:flex justify-between py-3 hidden items-center w-[1280px]'>
        <div className='flex gap-x-2 items-center'>
          <img src="https://i.ibb.co/S7t2yY9/logo-Associative-Upliftment.png" className='w-12 rounded-full' alt="" />
          <p className='text-xl font-bold font-itc text-[#602A2A]'>Associative Upliftment</p>
          <div className='flex gap-x-8 ml-10'>
            <Link to="/business">
              <p className='font-medium cursor-pointer'>Business</p>
            </Link>
            <Link to="success">
              <p className='font-medium cursor-pointer'>Success</p>
            </Link>

          </div>
        </div>

        <div>
          {user ? (
            <>
              <Link to='dashboard' className="text-[#414141] hover:bg-black hover:text-white mr-4 rounded-md px-3 py-2 text-sm font-medium">Dashboard</Link>
              <button
                onClick={logOut}
                className="bg-black text-white rounded-lg p-2 lg:w-[217px] lg:h-[48px]"
              >
                Logout
              </button>
            </>
          ) : (
            <>

              <div className="flex gap-x-7">

                <Link to="/login">
                  <div className='border border-black py-1 px-5 rounded-md text-md cursor-pointer hover:bg-black hover:text-white'>
                    Log in
                  </div>
                </Link>
                <Link to="/signup">
                  <div className='border border-black py-1 px-5 rounded-md text-md cursor-pointer bg-black text-white'>
                    Join
                  </div>
                </Link>

              </div>

            </>
          )}
        </div>

      </div>
    </>
  );
};

export default UpperNav;