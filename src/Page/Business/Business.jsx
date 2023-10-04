import React, { useEffect, useState } from 'react';
import Loader from '../../Components/Loader';

const Business = ({children}) => {
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
            <img src="https://i.ibb.co/9VxQ6SZ/b-16.png" alt="" className="mb-8 h-[400px] w-full hidden lg:block" />
            <div className="mt-10 max-w-7xl mx-2 lg:mx-auto">
                <p className="mt-4">Business is a broad term that refers to organizations or individuals engaged in various economic activities with the primary aim of generating profit or providing goods and services to meet the needs of customers. Here are some key aspects and concepts related to business:</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Entrepreneurship: </span> Business often begins with entrepreneurship, where individuals or groups identify opportunities in the market and take the initiative to start and manage a venture. Entrepreneurs are responsible for making key decisions, taking risks, and driving innovation.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Types of Businesses: </span> Businesses can take various forms, including sole proprietorships (owned by a single individual), partnerships (owned by two or more people), corporations (legally separate entities with shareholders), and limited liability companies (combining elements of partnerships and corporations).</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Business Functions: </span> Businesses typically involve various functions, including marketing (promoting and selling products or services), finance (managing money and investments), operations (production and logistics), and human resources (managing employees).</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Business Models: </span> A business model defines how a company creates, delivers, and captures value. Different business models exist, such as selling physical products, offering services, licensing intellectual property, or generating revenue through advertising and subscriptions.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Profit Motive: </span> One of the primary goals of most businesses is to generate profit, which is the difference between revenue (money earned) and expenses (costs incurred). Profit allows businesses to grow, invest, and reward stakeholders.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Market Research: </span> Successful businesses often conduct market research to understand consumer needs, competition, and industry trends. This information helps them make informed decisions about product development, pricing, and marketing strategies.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Business Ethics: </span> Ethical considerations are crucial in business, including issues related to fair competition, honesty in advertising, responsible environmental practices, and the treatment of employees and customers.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Globalization: </span> Many businesses operate on a global scale, engaging in international trade and expanding their reach beyond their home countries. Globalization has led to increased competition and opportunities for growth.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Technology: </span> The use of technology is integral to modern business operations. It impacts areas such as e-commerce, digital marketing, data analytics, automation, and communication.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Sustainability: </span> Sustainable business practices focus on minimizing environmental impact and considering social responsibility. Companies are increasingly adopting sustainability initiatives to address environmental concerns and meet consumer demands.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Regulation and Compliance: </span> Businesses must adhere to various laws and regulations that govern their operations. These can relate to taxation, labor practices, consumer protection, and industry-specific regulations.</p>
                
                <p className="mt-4"><span className="text-lg font-bold">Business Success: </span> Success in business can be measured by factors such as profitability, market share, customer satisfaction, and long-term sustainability. It often requires effective management, strategic planning, and adaptation to changing economic conditions.</p>
                
                <p className="my-4">Business is a dynamic and diverse field that plays a significant role in the global economy. It encompasses a wide range of industries, from manufacturing and technology to healthcare and finance, and it continues to evolve in response to economic, technological, and societal changes.</p>
                
            </div>
            <div>{children}</div>
        </>
    );
};

export default Business;