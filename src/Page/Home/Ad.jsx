import { Link } from "react-router-dom";

const Ad = () => {
    const toTop = () => {
        window.scrollTo(0, 0);
      };
  return (
    <>
      <div className="bg-black py-[54px] relative">
        <div className="flex mx-4 max-w-7xl lg:mx-auto justify-between items-center gap-x-8">
        <img className="absolute h-[800px] left-0 lg:left-40 top-5" src="https://i.ibb.co/3TGCRW4/SHAPE.png" alt="" />
          <div className="">
            <img className="my-8" src="https://i.ibb.co/0md3Wy5/Star-41.png" alt="" />
            <h3 className="text-4xl lg:text-7xl font-bold text-white mb-12">
              Six specialists will work for your project
            </h3>
            <p className="text-white mt-8 mb-8">
            A team of six specialists is dedicated to your project, contributing their expertise to ensure its success. Each specialist possesses unique skills in their respective fields, forming a diverse and highly capable team that complements one another. Together, they create a dynamic work environment where ideas flow, challenges are overcome, and innovative solutions are forged. The team consists of a skilled project manager, an adept software developer, a visionary designer, an experienced data analyst, a savvy marketing expert, and a proficient communicator and collaborator. Their collective efforts drive the project forward, ensuring its objectives are met with excellence.
            </p>
            <Link to='/services' onClick={toTop}><button className="bg-[#FFE500] px-2 lg:px-0 text-black rounded-lg lg:w-[217px] h-[48px] font-semibold">See Our Services</button></Link>
            
          </div>
          <img className="hidden w-[550px] lg:block" src="https://i.ibb.co/Vqgwjtf/Group-1000003444.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Ad;
