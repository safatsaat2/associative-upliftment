import React from 'react';

const TeamBanner = ({img, name, info, bannerImg}) => {
    return (
        <div className='py-20  teamBannerBG'>
            <div className='max-w-[1296px] mx-auto '>
                <div className='flex justify-center items-center gap-x-[21px]'>
                    <div className='flex flex-col items-center'>
                        <img className='w-[180px]' src={img} alt="" />
                        <div>
                            <h1 className='text-[48px] my-[40px] font-bold leading-[58px]'>{name}</h1>
                            <p className='leading-[26px] w-[585px]'>{info}</p>
                        </div>
                    </div>

                    <img src={bannerImg} alt="image" />

                </div>
            </div>
        </div>
    );
};

export default TeamBanner;