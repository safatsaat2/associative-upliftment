

const Banner = () => {
    return (
        <div className="bg-black w-full rounded-3xl mt-8">
            <div className="lg:flex lg:justify-between items-center w-full p-6">
                <div className="text-white ">
                    <h1 className="lg:text-[100px] font-sans font-semibold leading-[115px] pb-4 w-full lg:w-[710px]">Grow Your <span className="text-[#1A9755]">Business</span> By Joining us</h1>
                    <p className="text-white text-[20px] w-full lg:w-[685px] pb-4">You just give your product information. We will arrange it and present it to the audience.</p>
                    <button className='bg-white text-black rounded-lg lg:w-[217px] h-[48px] font-semibold'>Get Started</button>
                </div>
                <div>
                    <img className="w-full" src="https://i.ibb.co/Zzr7whS/image-3.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;