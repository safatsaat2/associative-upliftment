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
    ]


    if (loading) {
        return <Loader />
    }
    return (
        <>
            <img className="w-auto mx-auto mt-[72px] mb-[122px]" src="https://i.ibb.co/hfdL3Xq/1-12.png" />
            <div className='w-[1354px] mx-auto bg-[#051D2D] flex relative justify-center'>
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
            <div>{children}</div>
        </>
    );
};

export default Success;