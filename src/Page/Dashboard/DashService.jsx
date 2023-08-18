import { useParams } from "react-router-dom";

const DashService = () => {
    const { id } = useParams()

    return (
        <div className="lg:mx-[66px]">
            <h1 className="text-[32px] font-red text-black font-semibold lg:pt-20 h-full">
                How to Get Free Service?
            </h1>
            <p className="text-black lg:w-[781px] leading-[26px] font-red mt-6" >
                Just share our website with your friends and you will get free service. When your friend signs up and uses your unique ID as their reference code, you`ll be on your way to earning rewards!
            </p>
            <div className='w-full text-white lg:flex justify-between items-center rounded-[10px] mt-6 lg:mt-20 bg-black '>
                <div>
                    <h3 className="lg:text-[32px]  lg:pt-4 pl-4 font-red  pt-4">Facebook/Youtube/Instagram/Ads/video</h3>
                    <p className="text-[12px] lg:text-lg my-[12px] lg:pt-6 lg:py-4 pl-4 font-red">Invite Your 5 Friends</p>
                </div>
                <button className="lg:text-lg  mr-16 mb-4 lg:mb-0 text-white font-red bg-[#1E6ECE] px-2 py-2 rounded-[10px] ml-4 lg:ml-0">Get Free</button>
            </div>
            {
                id === '1' ? <div className='w-full text-white  lg:flex justify-between items-center rounded-[10px] mt-6 lg:mt-20 bg-black '>
                    <div>
                        <h3 className="lg:text-[32px]  lg:pt-4 pl-4 font-red  pt-4">FACEBOOK POST DESIGN</h3>
                        <p className="text-[12px] lg:text-lg my-[12px] lg:pt-6 lg:py-4 pl-4 font-red">NEW FACEBOOK POST DESIGN 2023

                        </p>
                        <p className="text-[12px] lg:text-lg my-[12px]  lg:py-4 pl-4 font-red">Invite Your 5 Friends</p>
                    </div>
                    <button className="lg:text-lg  mr-16 mb-4 lg:mb-0 text-white font-red bg-[#1E6ECE] px-2 py-2 rounded-[10px] ml-4 lg:ml-0">Get Free</button>
                </div>
                    :
                    id === "2" ? <div className='w-full text-white  lg:flex justify-between items-center rounded-[10px] mt-6 lg:mt-20 bg-black '>
                        <div>
                            <h3 className="lg:text-[32px]  lg:pt-4 pl-4 font-red  pt-4">A CAMPAIGN VIDEO</h3>
                            <p className="text-[12px] lg:text-lg my-[12px] lg:pt-6 lg:py-4 pl-4 font-red">BEST CAMPAIGN VIDEO MAKE FOR YOUR BUSINESS 2023</p>
                            <p className="text-[12px] lg:text-lg my-[12px]  lg:py-4 pl-4 font-red">Invite Your 5 Friends</p>
                        </div>
                        <button className="lg:text-lg  mr-16 mb-4 lg:mb-0 text-white font-red bg-[#1E6ECE] px-2 py-2 rounded-[10px] ml-4 lg:ml-0">Get Free</button>
                    </div>
                        :
                        id === "3" ? <div className='w-full text-white  lg:flex justify-between items-center rounded-[10px] mt-6 lg:mt-20 bg-black '>
                            <div>
                                <h3 className="lg:text-[32px]  lg:pt-4 pl-4 font-red  pt-4">INSTAGRAM HASHTAG RECHARGE
                                </h3>
                                <p className="text-[12px] lg:text-lg my-[12px] lg:pt-6 lg:py-4 pl-4 font-red">BEST HASHTAG RECHARGE FOR GROWING YOUR INSTAGRAM 2023

                                </p>
                                <p className="text-[12px] lg:text-lg my-[12px]  lg:py-4 pl-4 font-red">Invite Your 5 Friends</p>
                            </div>
                            <button className="lg:text-lg  mr-16 mb-4 lg:mb-0 text-white font-red bg-[#1E6ECE] px-2 py-2 rounded-[10px] ml-4 lg:ml-0">Get Free</button>
                        </div>
                            : id === "4" ? <div className='w-full text-white  lg:flex justify-between items-center rounded-[10px] mt-6 lg:mt-20 bg-black '>
                                <div>
                                    <h3 className="lg:text-[32px]  lg:pt-4 pl-4 font-red  pt-4">FACEBOOK BUSINESS PAGE
                                    </h3>
                                    <p className="text-[12px] lg:text-lg my-[12px] lg:pt-6 lg:py-4 pl-4 font-red">FACEBOOK BUSINESS PAGE CREATE AND PROFESSIONALLY SETUP FOR YOUR BUSINESS 2023

                                    </p>
                                    <p className="text-[12px] lg:text-lg my-[12px] pl-4 font-red">Invite Your 5 Friends</p>
                                </div>
                                <button className="lg:text-lg  mr-16 mb-4 lg:mb-0 text-white font-red bg-[#1E6ECE] px-2 py-2 rounded-[10px] ml-4 lg:ml-0">Get Free</button>
                            </div>
                                :
                                <></>
            }
        </div>
    );
};

export default DashService;