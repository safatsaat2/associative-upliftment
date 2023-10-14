import React from 'react';

const CustomBanner2 = ({img, header, para}) => {
    return (
        <>
            <div className='flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:gap-x-[186px] mt-0'>
                
                <div >
                    <h1 className='text-center lg:text-left text-[#149CE6] lg:text-black text-[20px] lg:text-[62px] leading-[30px] py-[30px] lg:leading-[72px] font-red'>{header}</h1>
                    <p className='leading-[22px] lg:leading-[26px] text-center lg:text-left text-[12px] lg:text-base mx-[66px] lg:mx-auto lg:mt-10'>{para}</p>
                </div>
                <img className='w-[235px] mx-auto lg:w-[497px]' src={img} alt="" />
            </div>
        </>
    );
};

export default CustomBanner2;