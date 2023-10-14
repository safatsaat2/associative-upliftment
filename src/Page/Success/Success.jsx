import React, { useEffect, useState } from 'react';
import Loader from '../../Components/Loader';

const Success = ({ children }) => {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const info = [
        {
            "key" : 1,
            "name" : "Financial Performance",
            "item1" : "Revenue Growth",
            "item2" : "Profitability",
            "item3" : "Return on Investment (ROI)",
            "item4" : "Cash Flow Management",
        },
        {
            "key" : 2,
            "name" : "Customer Satisfaction and Loyalty",
            "item1" : "High Customer Satisfaction Scores",
            "item2" : "Repeat Business",
            "item3" : "Customer Retention",
            "item4" : "Net Promoter Score (NPS)",
        },
        {
            "key" : 3,
            "name" : "Market Leadership and Positioning",
            "item1" : "Market Share Growth",
            "item2" : "Competitive Advantage",
            "item3" : "Brand Recognition",
            "item4" : "Industry Influence",
        },
        {
            "key" : 4,
            "name" : "Innovation and Product Development",
            "item1" : "New Product Launches",
            "item2" : "Research and Development Success",
            "item3" : "Patent and Intellectual Property Achievements",
            "item4" : "Innovation Awards",
        },
        {
            "key" : 5,
            "name" : "Operational Efficiency",
            "item1" : "Supply Chain Optimization",
            "item2" : "Cost Reduction Initiatives",
            "item3" : "Process Improvement",
            "item4" : "Inventory Management",
        },
        {
            "key" : 6,
            "name" : "Employee Satisfaction and Engagement",
            "item1" : "Low Employee Turnover",
            "item2" : "High Employee Engagement Scores",
            "item3" : "Training and Development Success",
            "item4" : "Workplace Awards",
        },
        {
            "key" : 7,
            "name" : "Sustainability and Corporate Social Responsibility (CSR)",
            "item1" : "Environmental Sustainability Efforts",
            "item2" : "Social Impact Initiatives",
            "item3" : "Ethical Business Practices",
            "item4" : "CSR Recognition",
        },
        {
            "key" : 8,
            "name" : "Market Expansion and Global Presence",
            "item1" : "International Expansion Success",
            "item2" : "Entering New Markets",
            "item3" : "Export and Import Achievements",
            "item4" : "Global Partnerships",
        },
        {
            "key" : 9,
            "name" : "Financial Stability and Risk Management",
            "item1" : "Resilience During Economic Downturns",
            "item2" : "Effective Risk Mitigation Strategies",
            "item3" : "Financial Audits and Transparency",
            "item4" : "Compliance with Regulations",
        },
        {
            "key" : 10,
            "name" : "Strategic Partnerships and Alliances",
            "item1" : "Strategic Partnership Agreements",
            "item2" : "Mergers and Acquisitions",
            "item3" : "Joint Ventures",
            "item4" : "Collaboration Success",
        },
        {
            "key" : 11,
            "name" : "Digital Transformation and Technology Adoption",
            "item1" : "Successful Digital Transformation Initiatives",
            "item2" : "Integration of Cutting-edge Technologies",
            "item3" : "IT Infrastructure Upgrades",
            "item4" : "Cybersecurity Preparedness",
        },
        {
            "key" : 12,
            "name" : "Customer Acquisition and Marketing Success",
            "item1" : "Effective Marketing Campaigns",
            "item2" : "Lead Generation",
            "item3" : "Conversion Rates",
            "item4" : "Marketing Awards and Recognition",
        },
        {
            "key" : 13,
            "name" : "Leadership and Management Excellence",
            "item1" : "Strong Leadership Team",
            "item2" : "Effective Decision-making",
            "item3" : "Management Awards and Accolades",
            "item4" : "Employee Leadership Development",
        },
        {
            "key" : 13,
            "name" : "Leadership and Management Excellence",
            "item1" : "Strong Leadership Team",
            "item2" : "Effective Decision-making",
            "item3" : "Management Awards and Accolades",
            "item4" : "Employee Leadership Development",
        },
        {
            "key" : 14,
            "name" : "Quality and Product Excellence",
            "item1" : "High-quality products or Services",
            "item2" : "ISO Certifications",
            "item3" : "Product Awards and Recognitions",
            "item4" : "Continuous Improvement Initiatives",
        },
        {
            "key" : 15,
            "name" : "Profitable Growth and Scaling",
            "item1" : "Expansion into New Locations",
            "item2" : "Growth in Market Capitalization",
            "item3" : "Achieving Scaling Goals",
            "item4" : "Positive Earnings Trends",
        },
    ]
    const info2 = [
        {
            "key" : 1,
            "name" : "Subjective Nature",
            "item1" : "Success is subjective and can mean different things to different people. What one person considers success may not be the same for someone else. It's highly dependent on an individual's goals, values, and aspirations.",
            
        },
        {
            "key" : 2,
            "name" : "Achievement",
            "item1" : "Success often involves achieving specific goals or objectives. This could be related to career advancement, financial stability, creative accomplishments, or personal development milestones.",
            
        },
        {
            "key" : 3,
            "name" : "Hard Work and Effort",
            "item1" : "In many cases, success is closely tied to hard work, dedication, and perseverance. Achieving one's goals often requires consistent effort and the ability to overcome challenges and setbacks.",
            
        },
        {
            "key" : 4,
            "name" : "Measuring Success",
            "item1" : "People may measure success in various ways, such as by financial wealth, recognition, personal happiness, or the impact they have on others and society as a whole.",
            
        },
        {
            "key" : 5,
            "name" : "Continuous Process",
            "item1" : "Success is not always a one-time event but rather an ongoing process of setting and achieving new goals. It can involve learning from failures and adapting to changing circumstances.",
            
        },
        {
            "key" : 6,
            "name" : "Balancing Priorities",
            "item1" : "Achieving success in one area of life may require balancing and prioritizing other aspects. For example, someone focused on a successful career may need to make sacrifices in terms of personal time and relationships.",
            
        },
        {
            "key" : 7,
            "name" : "Personal Fulfillment",
            "item1" : "True success often includes a sense of personal fulfillment and happiness. It's not solely about external accomplishments but also about feeling content and satisfied with one's life choices.",
            
        },
        
    ]


    if (loading) {
        return <Loader />
    }
    return (
        <>
            <img className="w-auto mx-auto mb-[122px]" src="https://i.ibb.co/hfdL3Xq/1-12.png" />
            <div className='w-[1320px] mx-auto bg-[#051D2D] flex relative justify-center'>
                <h1 className='text-[48px] text-white top-[43px] leading-[58px] absolute'>Categories related to business success</h1>
                <div className='mt-[150px] mb-[30px] pl-[21px]'>
                    {info.map(tab => <div key={tab.key} tabIndex={0} className="collapse w-[750px] collapse-arrow border-b border-white text-white rounded-none">
                        <div className="collapse-title text-xl font-medium">
                            <p className='text-[20px] py-[12px] leading-[30px]'>{tab.name}</p>
                        </div>
                        <div className="collapse-content">
                            <p className='text-[18px leading-[30px]'>{tab.item1}</p>
                            <p className='text-[18px leading-[30px]'>{tab.item2}</p>
                            <p className='text-[18px leading-[30px]'>{tab.item3}</p>
                            <p className='text-[18px leading-[30px]'>{tab.item4}</p>
                        </div>
                    </div>)}
                </div>
                <img className='-ml-[40px]' src="https://i.ibb.co/RvZ2HT9/Rectangle-6544.png" alt="" />
            </div>
            <div className='w-[1320px] my-[122px] mx-auto bg-[#051D2D] flex relative justify-center'>
                <h1 className='text-[48px] text-white top-[43px] leading-[58px] absolute'>Consider about success</h1>
                <div className='mt-[150px] mb-[30px] pl-[21px]'>
                    {info2.map(tab => <div key={tab.key} tabIndex={0} className="collapse w-[750px] collapse-arrow border-b border-white text-white rounded-none">
                        <div className="collapse-title text-xl font-medium">
                            <p className='text-[20px] py-[12px] leading-[30px]'>{tab.name}</p>
                        </div>
                        <div className="collapse-content">
                            <p className='text-[18px leading-[30px]'>{tab.item1}</p>
                        </div>
                    </div>)}
                </div>
                <img className='-ml-[40px]' src="https://i.ibb.co/T8mrWGg/Rectangle-6545.png" alt="" />
            </div>
            <div>{children}</div>
        </>
    );
};

export default Success;