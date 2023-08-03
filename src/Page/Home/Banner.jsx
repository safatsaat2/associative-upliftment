import { Link } from "react-router-dom";
{/*  */ }

const Banner = () => {
    return (
        <div className="mt-5 bg-[url('https://i.ibb.co/zJvVc2f/Group-1-2.png')] bg-cover">
            
            <div className="max-w-7xl mx-auto">
                <div className="pt-[176px]">
                    <img className="mb-12" src="https://i.ibb.co/XYKzYGw/Star-40.png" alt="" />
                    <h1 className="text-[80px] leading-[90px] text-white w-[812px]">Grow Your Business By Joining Us</h1>
                    <p className="leading-[26px] w-[405px] text-white mt-12">You just give your product information. We will arrange it and present to the audience.</p>
                    <Link to='/signup'><button className='bg-[#FFE600] px-3 py-3 mt-8 text-black rounded-lg '>Get Started</button></Link>
                </div>
                <div>
                    <img className=" w-[870px] h-[580px] -mt-48 ml-[370px] z-10" src="https://i.ibb.co/nD1tzZr/Rectangle-6383.png" alt="" />
                    <img className=" absolute -mt-20 right-20 z-10" src="https://i.ibb.co/0md3Wy5/Star-41.png" alt="" />

                    {/* <div className="h-10 bg-transparent"></div> */}
                </div>
                
            </div>
        </div>
    );
};

export default Banner;