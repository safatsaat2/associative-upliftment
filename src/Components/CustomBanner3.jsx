import React from 'react';

const CustomBanner3 = ({img, header, para}) => {
    return (
        <>
            <div className='flex  items-center justify-between gap-x-[86px]'>
                <img className='w-[497px]' src={img} alt="" />
                <div >
                    <h1 className='font-red text-[62px] leading-[72px]'>{header}</h1>
                    <p className='leading-[26px] mt-10 w-[697px]'>{para}</p>
                </div>
            </div>
        </>
    );
};

export default CustomBanner3;