import React, { useEffect, useState } from 'react';
import Loader from '../../Components/Loader';

const Success = ({children}) => {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => clearTimeout(timer);
    }, []);


    if (loading) {
        return <Loader />
    }
    return (
        <>
            <img src="https://i.ibb.co/Lr8BRSs/b-17.png" alt="" className="mb-8 h-[400px] w-full hidden lg:block" />
            <div className="mt-10 max-w-7xl mx-2 lg:mx-auto">
                <p className="">Success is often defined as the achievement of a goal or the attainment of a desired outcome. It can vary greatly from person to person and can encompass a wide range of accomplishments, both big and small. Success can be related to various aspects of life, including career, personal relationships, health, education, and personal growth.</p>
                
                <p className="mt-4">Here are a few key points to consider about success:</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Subjective Nature: </span> Success is subjective and can mean different things to different people. What one person considers success may not be the same for someone else. It's highly dependent on an individual's goals, values, and aspirations.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Achievement: </span>Success often involves achieving specific goals or objectives. This could be related to career advancement, financial stability, creative accomplishments, or personal development milestones.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Hard Work and Effort: </span>In many cases, success is closely tied to hard work, dedication, and perseverance. Achieving one's goals often requires consistent effort and the ability to overcome challenges and setbacks.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Measuring Success: </span>People may measure success in various ways, such as by financial wealth, recognition, personal happiness, or the impact they have on others and society as a whole.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Continuous Process:</span> Success is not always a one-time event but rather an ongoing process of setting and achieving new goals. It can involve learning from failures and adapting to changing circumstances.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Balancing Priorities: </span>Achieving success in one area of life may require balancing and prioritizing other aspects. For example, someone focused on a successful career may need to make sacrifices in terms of personal time and relationships.
</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Personal Fulfillment:</span> True success often includes a sense of personal fulfillment and happiness. It's not solely about external accomplishments but also about feeling content and satisfied with one's life choices.</p>
                
                <p className="my-4">It's important to remember that success is a highly individualized concept, and there is no universal definition of success that applies to everyone. What matters most is that you define success in a way that aligns with your values and goals and that brings you a sense of fulfillment and happiness.</p>
                
            </div>
            <div>{children}</div>
        </>
    );
};

export default Success;