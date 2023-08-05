import { Link } from "react-router-dom";

const Ad = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="bg-black py-[54px] relative">
        <div className="flex mx-4 max-w-7xl lg:mx-auto justify-between items-center gap-x-8">
          <div className="">
            <div className="flex justify-center items-start gap-x-3">
              <img className="-ml-8" src="https://i.ibb.co/0md3Wy5/Star-41.png" alt="" />
              <h3 className="text-4xl lg:text-7xl font-bold text-white mb-6">
                Six specialists will work for your project
              </h3>
            </div>
            <p className="text-white mt-8 mb-8">
              A team of six specialists is dedicated to your project, contributing their expertise to ensure its success. Each specialist possesses unique skills in their respective fields, forming a diverse and highly capable team that complements one another. Together, they create a dynamic work environment where ideas flow, challenges are overcome, and innovative solutions are forged. The team consists of a skilled project manager, an adept software developer, a visionary designer, an experienced data analyst, a savvy marketing expert, and a proficient communicator and collaborator. Their collective efforts drive the project forward, ensuring its objectives are met with excellence.
            </p>
            <Link to='/services' onClick={toTop}><button className="bg-[#FFE500] px-2 lg:px-10 lg:py-4 text-black rounded-lg font-semibold">See Our Services</button></Link>

          </div>
          <img className="hidden w-[550px] lg:block" src="https://i.ibb.co/GWhX05G/Group-1000003444-2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Ad;
