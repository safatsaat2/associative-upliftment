import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BeInContact from '../../Components/BeInContact';
import StrategyMiddleBanner from '../../Components/StrategyMiddleBanner';

const Strategy = ({children}) => {

    const [data, setData] = useState([])

    const { name } = useParams()

    useEffect(() => {
        fetch("/public/strategy.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const filterData = data.filter(dta => dta.params === name)
                setData(filterData)
            })
    }, [])

    console.log(data)


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
            </div>
            {children}
        </>
    );
};

export default Strategy;