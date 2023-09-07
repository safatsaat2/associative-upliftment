import React from 'react';
import AutoPlayVideos from '../../Components/AutoPlayVideos';

const VideoSection = () => {
    const video = "video.mp4"
    return (
        <>
           <div className='max-w-7xl mx-auto gap-x-6 lg:flex items-center justify-center'>
            <div className='lg:w-[646px] lg:h-[422px] rounded-xl overflow-hidden px-2 lg:px-0'>
            <AutoPlayVideos videoSrc={video} />
            </div>
            <div>
                <h1 className='px-2 text-5xl font-red'>Associative Upliftment</h1>
                <p className='px-2 lg:w-[421px] text-xl mt-4'>A dedicated team takes a business step by step to the final frontier.</p>
            </div>
            </div> 
        </>
    );
};

export default VideoSection;