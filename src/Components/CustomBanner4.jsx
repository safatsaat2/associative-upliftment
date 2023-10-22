import React from 'react';

const CustomBanner4 = ({ img, header, para }) => {
    return (
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-[100px]'>
            <img className='w-[235px] mx-auto lg:w-[497px]' src={img} alt="" />
            <div >
                <h1 className='font-red text-center lg:text-left text-[#149CE6] lg:text-black text-[20px] lg:text-[62px] leading-[30px] py-[30px] lg:leading-[72px]'>{header}</h1>
                <p className='leading-[22px] lg:leading-[26px] text-center lg:text-left text-[12px] lg:text-base mx-[66px] lg:mx-auto lg:mt-10 lg:w-[697px]'>{para}</p>
            </div>
        </div>
    );
};

export default CustomBanner4;