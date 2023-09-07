import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AutoPlayVideos = ({ videoSrc }) => {
    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Only trigger once when the video enters the viewport
    });
    const videoRef = useRef(null);
    useEffect(() => {
        if (inView) {
            // If the video is in view, play it
            videoRef.current.play();
        } else {
            // If it's not in view, pause it or take any other desired action
            videoRef.current.pause();
        }
    }, [inView]);
    return (
        <div ref={inViewRef}>
            <video ref={videoRef} autoPlay>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default AutoPlayVideos;