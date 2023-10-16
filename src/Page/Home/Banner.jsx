import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <>
            <div className="bg-[url('https://i.ibb.co/qmWssp7/replicate-prediction-b57ayjbb5bd6h5hc4cj7juqc3i.jpg')] bg-cover bg-center hidden lg:block">
                <div className="max-w-7xl mx-auto relative">
                    <div className="pt-[40px]">
                        <h1 className="text-[80px] leading-[90px] text-white w-[812px]">Grow Your Business By Joining Us</h1>
                        <p className="leading-[26px] w-[405px] text-white mt-12">You just give your product information. We will arrange it and present to the audience.</p>
                        <Link to='/signup'><button className='bg-[#FFE600] font-semibold px-6 py-3 mt-8 text-black rounded-lg '>Join Us</button></Link>

                    </div>

                    <img className=" w-[870px] -mt-48 ml-[370px] " src="https://i.ibb.co/0nf5c23/replicate-prediction-bj5i6vbbl4pp36opxbqxpws5ce.png" alt="" />
                    <img className=" absolute -mt-20 -right-[20px] " src="https://i.ibb.co/0md3Wy5/Star-41.png" alt="" />
                    <img className=" absolute -mt-[293px]  " src="https://i.ibb.co/JykYwB5/image-807.png" alt="" />

                    {/* <div className="h-10 bg-transparent"></div> */}

                </div>
                <div className="max-w-[1440px] mx-auto relative">
                    <img className="absolute -mt-10 left-0 " src="https://i.ibb.co/wwN5pjk/Group-1-3.png" alt="" />
                </div>
            </div>
            {/* Mobile Section */}
            <div className="mt-5 bg-[url('https://i.ibb.co/2Y2FHpV/replicate-prediction-7eb6xejbu5bdy4h5e4ivkdhyfu.jpg')] bg-cover bg-center block lg:hidden">
                <div className="pt-[36px] w-[344px] mx-auto">
                    <img className="mb-12 w-[45px] " src="https://i.ibb.co/XYKzYGw/Star-40.png" alt="" />
                    <h1 className="text-[40px] leading-[50px] -mt-24 font-red text-white text-center w-[344px] mx-auto">Grow Your <span className="bg-[#149CE6] p-1 font-red rounded-[10px]">Business</span> By Joining Us</h1>
                    <p className="leading-[22px] text-white mt-[24px] w-[266px] mx-auto text-[12px] text-center">You just give your product information. We will arrange it and present to the audience.</p>
                    <div className="w-full grid justify-center">
                        <Link to='/signup'><button className='bg-[#149CE6] px-3 py-3 mt-3 text-black rounded-lg'>Join Us</button></Link>
                    </div>
                </div>
                <img className="mt-2 w-full" src="https://i.ibb.co/N6ZRqZB/Rectangle-6383-3.png" alt="" />
                <img className="absolute right-0 -mt-12 mr-4" src="https://i.ibb.co/k8LDn5S/Star-41-1.png" alt="" />
            </div>
        </>
    );
};

export default Banner;