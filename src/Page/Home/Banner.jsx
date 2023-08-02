import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="bg-black w-full mt-8">
            <div className="flex flex-col-reverse text-center max-w-7xl mx-auto lg:text-start lg:flex lg:flex-row lg:justify-between items-center w-full p-6">
                <div className="text-white ">
                    <h1 className="text-4xl lg:text-[100px] font-sans font-semibold lg:leading-[115px] pb-4 w-full lg:w-[710px]">Grow Your <span className="text-[#1A9755]">Business</span> By Joining us</h1>
                    <p className="text-white text-[20px] w-full lg:w-[685px] pb-4">You just give your product information. We will arrange it and present it to the audience.</p>
                    <Link to='/signup'><button className='bg-white px-2 lg:px-0 text-black rounded-lg lg:w-[217px] h-[48px] font-semibold'>Get Started</button></Link>
                </div>
                {/* <div data-aos="zoom-in-up" data-aos-duration="1000"> 
                    <img  className="w-full mb-6 lg:mb-0" src="https://i.ibb.co/Zzr7whS/image-3.png" alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default Banner;