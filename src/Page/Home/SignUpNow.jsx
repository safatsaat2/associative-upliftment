import { Link } from "react-router-dom";

const SignUpNow = () => {
    return (
        <div className="max-w-7xl bg-black rounded-3xl flex flex-col justify-center items-center mx-auto">
            <h1 data-aos="zoom-in-up" data-aos-duration="1000" className="text-white text-[64px] leading-[135%] text-center font-semibold font-sans pb-4 pt-[88px]">Sign Up Now!!</h1>
            <p data-aos="zoom-in-up" data-aos-duration="1000" className="text-base leading-[155%] text-white text-center pb-6 px-14">We offer exceptional services to our customers worldwide. Take a look at our service offerings.</p>
            <Link to='/signup'><button className='bg-white text-black rounded-lg lg:w-[217px] h-[48px] font-semibold mb-[88px]'>Get Started</button></Link>
        </div>
    );
};

export default SignUpNow;