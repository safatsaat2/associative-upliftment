import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mt-5 bg-[url('https://i.ibb.co/qmWssp7/replicate-prediction-b57ayjbb5bd6h5hc4cj7juqc3i.jpg')] bg-cover bg-center">

            <div className="max-w-7xl mx-auto relative">
                <div className="pt-[40px]">
                    <img className="mb-12" src="https://i.ibb.co/XYKzYGw/Star-40.png" alt="" />
                    <h1 className="text-[80px] leading-[90px] text-white w-[812px]">Grow Your Business By Joining Us</h1>
                    <p className="leading-[26px] w-[405px] text-white mt-12">You just give your product information. We will arrange it and present to the audience.</p>
                    <Link to='signup'><button className='bg-[#FFE600] px-3 py-3 mt-8 text-black rounded-lg '>Get Started</button></Link>

                </div>

                <img className=" w-[870px] h-[580px] -mt-48 ml-[370px] " src="https://i.ibb.co/jDwcfKw/replicate-prediction-h7w7wszbvpdgxocrekaembgt4e.png" alt="" />
                <img className=" absolute -mt-20 -right-[20px] " src="https://i.ibb.co/0md3Wy5/Star-41.png" alt="" />
                <img className=" absolute -mt-[293px]  " src="https://i.ibb.co/JykYwB5/image-807.png" alt="" />

                {/* <div className="h-10 bg-transparent"></div> */}

            </div>
            <div className="max-w-[1440px] mx-auto relative">
                <img className="absolute -mt-10 left-0 " src="https://i.ibb.co/wwN5pjk/Group-1-3.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;