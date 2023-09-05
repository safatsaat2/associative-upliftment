import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const UpperNav = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <>
            <div className='flex justify-between my-7 items-center w-[1280px]'>
                <img src="https://i.ibb.co/CvqH8QY/LOGO.png" alt="" />
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
                      
                      <div className="flex gap-x-9">
                    
                    <Link to="/login">
                    <div className='border border-black py-3 px-10 rounded-xl text-xl cursor-pointer hover:bg-black hover:text-white'>
                        Log in
                    </div>
                    </Link>
                    <Link to="/signup">
                    <div className='border border-black py-3 px-10 rounded-xl text-xl cursor-pointer hover:bg-black hover:text-white'>
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