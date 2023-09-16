import React from 'react';

const CustomBanner2 = ({img, header, para}) => {
    return (
        <>
            <div className='flex items-center justify-between gap-x-[120px] mt-0'>
                
                <div >
                    <h1 className='font-red text-[62px] leading-[72px]'>{header}</h1>
                    <p className='leading-[26px] mt-10'>{para}</p>
                </div>
                <img className='w-1/2' src={img} alt="" />
            </div>
        </>
    );
};

export default CustomBanner2;