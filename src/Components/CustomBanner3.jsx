import React from 'react';

const CustomBanner3 = () => {
    return (
        <>
            <div className='flex  items-center justify-between gap-x-[190px]'>
                <img src={img} alt="" />
                <div >
                    <h1 className='font-red text-[62px] leading-[72px]'>{header}</h1>
                    <p className='font-red leading-[26px] mt-10'>{para}</p>
                </div>
            </div>
        </>
    );
};

export default CustomBanner3;