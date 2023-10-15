import React from 'react';

const ExtraSection = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-x-[88px] my-[80px]'>
            <div className='lg:w-[439px]'>
                <h1 className='font-red text-center lg:text-left text-[#149CE6] lg:text-black text-[20px] lg:text-[62px] leading-[30px] py-2 lg:py-[30px] lg:leading-[72px]'>Associative Upliftment</h1>
                <p className='lg:mt-8 lg:text-xl text-[12px] mx-[40px] lg:text-left text-center lg:mx-auto'>A dedicated team takes a business step by step to the final frontier. Thousands of clients have achieved business success through the planning and work of our expert team.</p>
            </div>
            <div>
                <div className=''>
                    <img className=' mx-auto lg:mt-0 mt-4 w-[300px] lg:w-[700px]' src="https://i.ibb.co/NKhR2yh/Group-1000003571.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;