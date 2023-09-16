import React, { useEffect, useState } from 'react';
import Loader from '../../Components/Loader';

const Success = ({children}) => {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => clearTimeout(timer);
    }, []);


    if (loading) {
        return <Loader />
    }
    return (
        <>
            <img src="https://i.ibb.co/Lr8BRSs/b-17.png" alt="" className="mb-8 h-[400px] w-full hidden lg:block" />
            <div className="mt-10 max-w-7xl mx-2 lg:mx-auto">
                Hello
            </div>
            <div>{children}</div>
        </>
    );
};

export default Success;