import React from 'react';

const EranMoneyCard = () => {
    return (
        <div className="flex justify-center items-center gap-x-[150px]  mx-auto">
            <img className='w-[200px]' src="https://i.ibb.co/2h8MCMx/im.png" alt="" />
            <div className="flex items-center gap-x-[192px]">
                <div>
                    <h3 className='text-[48px] font-bold leading-[58px]'>A Campaign <span className='text-[#1973E3]'>Video</span> 2023</h3>
                    <p className='mt-[30px] text-[28px] leading-[38px]'>Related to your Business</p>
                    <p className='mt-[8px] leading-[26px]'>Invite Your 5 Friends</p>
                </div>
                <button className="text-[20px] leading-[30px] text-white bg-[#1973E3] px-[41px] py-[11px] rounded-[10px]">
                    Free
                </button>
            </div>
        </div>
    );
};

export default EranMoneyCard;