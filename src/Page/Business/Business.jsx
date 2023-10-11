import React, { useEffect, useState } from 'react';
import Loader from '../../Components/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';

const Business = ({ children }) => {
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
            "name" : "1. Entrepreneurship",
            "details" : "Business often begins with entrepreneurship, where individuals or groups identify opportunities in the market and take the initiative to start and manage a venture. Entrepreneurs are responsible for making key decisions, taking risks, and driving innovation."
        },
        {
            "key" : 2,
            "name" : "2. Types of Businesses",
            "details" : "Businesses can take various forms, including sole proprietorships (owned by a single individual), partnerships (owned by two or more people), corporations (legally separate entities with shareholders), and limited liability companies (combining elements of partnerships and corporations)."
        },
        {
            "key" : 3,
            "name" : "3. Business Functions",
            "details" : "Businesses typically involve various functions, including marketing (promoting and selling products or services), finance (managing money and investments), operations (production and logistics), and human resources (managing employees)."
        },
        {
            "key" : 4,
            "name" : "4. Business Models",
            "details" : "A business model defines how a company creates, delivers, and captures value. Different business models exist, such as selling physical products, offering services, licensing intellectual property, or generating revenue through advertising and subscriptions."
        },
        {
            "key" : 5,
            "name" : "5. Profit Motive",
            "details" : "One of the primary goals of most businesses is to generate profit, which is the difference between revenue (money earned) and expenses (costs incurred). Profit allows businesses to grow, invest, and reward stakeholders."
        },
        {
            "key" : 6,
            "name" : "6. Market Research",
            "details" : "Successful businesses often conduct market research to understand consumer needs, competition, and industry trends. This information helps them make informed decisions about product development, pricing, and marketing strategies."
        },
        {
            "key" : 7,
            "name" : "7. Business Ethics",
            "details" : "Ethical considerations are crucial in business, including issues related to fair competition, honesty in advertising, responsible environmental practices, and the treatment of employees and customers."
        },
        {
            "key" : 8,
            "name" : "8. Globalization",
            "details" : "Many businesses operate on a global scale, engaging in international trade and expanding their reach beyond their home countries. Globalization has led to increased competition and opportunities for growth."
        },
        {
            "key" : 9,
            "name" : "9. Technology",
            "details" : "The use of technology is integral to modern business operations. It impacts areas such as e-commerce, digital marketing, data analytics, automation, and communication."
        },
        {
            "key" : 10,
            "name" : "10. Sustainability",
            "details" : "Sustainable business practices focus on minimizing environmental impact and considering social responsibility. Companies are increasingly adopting sustainability initiatives to address environmental concerns and meet consumer demands."
        },
        {
            "key" : 11,
            "name" : "11. Regulation and Compliance",
            "details" : "Businesses must adhere to various laws and regulations that govern their operations. These can relate to taxation, labor practices, consumer protection, and industry-specific regulations."
        },
        {
            "key" : 12,
            "name" : "12. Business Success",
            "details" : "Success in business can be measured by factors such as profitability, market share, customer satisfaction, and long-term sustainability. It often requires effective management, strategic planning, and adaptation to changing economic conditions."
        },
    ]


    if (loading) {
        return <Loader />
    }
    return (
        <>

            <img className='w-auto mx-auto mt-[72px]' src="https://i.ibb.co/Pz2tsp3/1-11.png" alt="" />
            <p className='text-[48px] leading-[58px] mt-[160px] lg:max-w-[1296px] mx-auto'>What is your business
            </p>
            <div className='max-w-[1296px] mx-auto mt-[48px]'>
                <Swiper
                    slidesPerView={4}
                >
                    <SwiperSlide>
                        <div className='dashShadow  py-[13px] pl-[10px] w-[316px] bg-white rounded-[20px] mb-20 flex items-center'>
                            <div className='w-[55px]  h-[57px] bg-[#D9D9D9] rounded-[10px]'>

                            </div>
                            <p className='leading-[26px] ml-4 mr-[20px]'>Clothing</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M15.7522 8.70711C16.1427 8.31658 16.1427 7.68342 15.7522 7.29289L9.38825 0.928932C8.99772 0.538408 8.36456 0.538408 7.97403 0.928932C7.58351 1.31946 7.58351 1.95262 7.97403 2.34315L13.6309 8L7.97403 13.6569C7.58351 14.0474 7.58351 14.6805 7.97403 15.0711C8.36456 15.4616 8.99772 15.4616 9.38825 15.0711L15.7522 8.70711ZM0 9H15.0451V7H0V9Z" fill="black" />
                            </svg>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='dashShadow ml-[32px] py-[13px] pl-[10px] w-[316px] bg-white rounded-[20px] mb-20 flex items-center'>
                            <div className='w-[55px]  h-[57px] bg-[#D9D9D9] rounded-[10px]'>

                            </div>
                            <p className='leading-[26px] ml-4 mr-[20px]'>Make up</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M15.7522 8.70711C16.1427 8.31658 16.1427 7.68342 15.7522 7.29289L9.38825 0.928932C8.99772 0.538408 8.36456 0.538408 7.97403 0.928932C7.58351 1.31946 7.58351 1.95262 7.97403 2.34315L13.6309 8L7.97403 13.6569C7.58351 14.0474 7.58351 14.6805 7.97403 15.0711C8.36456 15.4616 8.99772 15.4616 9.38825 15.0711L15.7522 8.70711ZM0 9H15.0451V7H0V9Z" fill="black" />
                            </svg>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='dashShadow ml-[64px] py-[13px] pl-[10px] w-[316px] bg-white rounded-[20px] mb-20 flex items-center'>
                            <div className='w-[55px]  h-[57px] bg-[#D9D9D9] rounded-[10px]'>

                            </div>
                            <p className='leading-[26px] ml-4 mr-[20px]'>Restaurant</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M15.7522 8.70711C16.1427 8.31658 16.1427 7.68342 15.7522 7.29289L9.38825 0.928932C8.99772 0.538408 8.36456 0.538408 7.97403 0.928932C7.58351 1.31946 7.58351 1.95262 7.97403 2.34315L13.6309 8L7.97403 13.6569C7.58351 14.0474 7.58351 14.6805 7.97403 15.0711C8.36456 15.4616 8.99772 15.4616 9.38825 15.0711L15.7522 8.70711ZM0 9H15.0451V7H0V9Z" fill="black" />
                            </svg>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='dashShadow ml-[96px] py-[13px] pl-[10px] w-[316px] bg-white rounded-[20px] mb-20 flex items-center'>
                            <div className='w-[55px]  h-[57px] bg-[#D9D9D9] rounded-[10px]'>

                            </div>
                            <p className='leading-[26px] ml-4 mr-[20px]'>Farm</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M15.7522 8.70711C16.1427 8.31658 16.1427 7.68342 15.7522 7.29289L9.38825 0.928932C8.99772 0.538408 8.36456 0.538408 7.97403 0.928932C7.58351 1.31946 7.58351 1.95262 7.97403 2.34315L13.6309 8L7.97403 13.6569C7.58351 14.0474 7.58351 14.6805 7.97403 15.0711C8.36456 15.4616 8.99772 15.4616 9.38825 15.0711L15.7522 8.70711ZM0 9H15.0451V7H0V9Z" fill="black" />
                            </svg>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='dashShadow ml-[128px] py-[13px] pl-[10px] w-[316px] bg-white rounded-[20px] mb-20 flex items-center'>
                            <div className='w-[55px]  h-[57px] bg-[#D9D9D9] rounded-[10px]'>

                            </div>
                            <p className='leading-[26px] ml-4 mr-[20px]'>Teaching</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M15.7522 8.70711C16.1427 8.31658 16.1427 7.68342 15.7522 7.29289L9.38825 0.928932C8.99772 0.538408 8.36456 0.538408 7.97403 0.928932C7.58351 1.31946 7.58351 1.95262 7.97403 2.34315L13.6309 8L7.97403 13.6569C7.58351 14.0474 7.58351 14.6805 7.97403 15.0711C8.36456 15.4616 8.99772 15.4616 9.38825 15.0711L15.7522 8.70711ZM0 9H15.0451V7H0V9Z" fill="black" />
                            </svg>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='max-w-[1296px] mx-auto mt-[140px]'>
                <p className='text-[48px] leading-[58px] mt-[160px] text-center lg:max-w-[1296px] mx-auto'>Concepts Related To Business
                </p>
                <div className='my-[80px]'>
                    {info.map(tab => <div key={tab.key} tabIndex={0} className="collapse collapse-arrow border-b border-black bg-white rounded-none">
                        <div className="collapse-title text-xl font-medium">
                            <p className='text-[20px] leading-[30px]'>{tab.name}</p>
                        </div>
                        <div className="collapse-content">
                            <p className='text-[18px leading-[30px]'>{tab.details}</p>
                        </div>
                    </div>)}
                    
                    
                </div>
            </div>

            <div>{children}</div>
        </>
    );
};

export default Business;