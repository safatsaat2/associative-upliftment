import React from 'react';

const BeInContact = ({ title, description, firstBoxIcon, firstBoxTitle, firstBoxDescription, secondBoxIcon, secondBoxTitle, secondBoxDescription, image }) => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between mt-10 mx-2 gap-y-5'>
            <div>
                <h1 className='text-[22px] text-center lg:text-left lg:text-5xl text-[#1973E3] font-bold'>{title}</h1>
                <p className={firstBoxDescription ? 'mt-6 text-[12px] lg:w-[651px]' : 'mt-6 text-[12px] lg:text-xl lg:w-[597px]'}>{description}</p>
                {
                    firstBoxTitle ? <div className='flex items-center justify-between mt-[50px]'>
                    <div className='w-[300px]'>
                        <img src={firstBoxIcon} alt="" />
                        <p className='font-bold text-[#1973E3] mt-8 mb-2'>{firstBoxTitle}</p>
                        <p>{firstBoxDescription}</p>
                    </div>
                    <div className='w-[300px]'>
                        <img src={secondBoxIcon} alt="" />
                        <p className='font-bold text-[#1973E3] mt-8 mb-2'>{secondBoxTitle}</p>
                        <p>{secondBoxDescription}</p>
                    </div>
                </div> :<></>
                }
                
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default BeInContact;