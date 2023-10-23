import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BeInContact from '../../Components/BeInContact';
import StrategyMiddleBanner from '../../Components/StrategyMiddleBanner';
import Loader from '../../Components/Loader';

const Strategy = ({children}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const { name } = useParams();


    useEffect(() => {
        fetch("/strategy.json")
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(dta => dta.name === name)
                setData(filterData);
            })
    }, [name])

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false)
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

    const innerData = data[0];

    if(loading){
        return <Loader/>
    }
    return (
        
        <>
            <div className='max-w-7xl mx-auto'>
                <BeInContact title="A Successful Business" description="A successful business strategy begins with a clear and compelling vision that guides all decision-making. It involves a thorough analysis of the market and competition to identify opportunities and threats. Once the strategic direction is set, it's crucial to prioritize objectives and allocate resources effectively. Continual adaptation and flexibility are essential to stay agile in a dynamic business environment. Finally, a well-executed strategy should focus on delivering value to customers and stakeholders, ultimately driving sustainable growth and profitability." image="https://i.ibb.co/CbcRQDf/Rectangle-6492.png" />
                <div className='mt-20'>
                <StrategyMiddleBanner image="https://i.ibb.co/HHsLvxD/I-1-1.png" title="Associative Upliftment" description="A team of six members is provided for each client who informs the client about the plan and work."/>
                </div>
                <div className='my-20'>
                    <BeInContact title="A Small Business" description="In managing a small business, it's essential to prioritize efficiency and cost-effectiveness to maximize limited resources. Effective leadership and communication are crucial for aligning the team with the company's goals and ensuring everyone is working toward the same objectives. Additionally, fostering strong relationships with customers and suppliers can help build a loyal customer base and secure essential partnerships for long-term success." image="https://i.ibb.co/fv0LVrT/Rectangle-6492-1.png" />
                </div>
                <div className='my-10 mx-2'>
                    <h2 className='text-center text-[22px] lg:text-[48px] text-gray-800 font-bold'>{innerData?.title}</h2>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>Description -</span> {innerData?.description}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs1Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs2Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs3Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs4Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs5Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs6Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs7Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs8Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs9Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs10Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs11Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs12Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs13Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs14Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        <span className='font-bold text-gray-800'>{innerData?.whyUs15Title} -</span> {innerData?.whyUs1}
                    </p>
                    <p className='text-xs lg:text-[18px] mt-4 leading-8'>
                        {innerData?.conclusion}
                    </p>
                    
                </div>
            </div>
            {children}
        </>
    );
};

export default Strategy;