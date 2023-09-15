import React from 'react';
import { DotLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <DotLoader color="#FFE500" />
        </div>
    );
};

export default Loader;