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
            <img className="w-auto mx-auto mt-[72px]" src="https://i.ibb.co/hfdL3Xq/1-12.png"/>
            <div>{children}</div>
        </>
    );
};

export default Success;