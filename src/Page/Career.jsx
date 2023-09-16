import React, { useEffect, useState } from 'react';
import Loader from '../Components/Loader';

const Career = ({children}) => {
    const [loading, setLoading] = useState(true)


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  if(loading){
    return <Loader/>
  }

    return (
        <>
         <img src="https://i.ibb.co/9r0SSr1/b-14.png" alt="" className="mb-8 h-[400px] object-cover w-full hidden lg:block" />
         <div className="mt-10 max-w-7xl mx-2 lg:mx-auto">
            Hello
        </div>
        <div>{children}</div>
        </>
    );
};

export default Career;