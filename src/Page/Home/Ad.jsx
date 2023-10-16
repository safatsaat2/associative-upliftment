import { Link } from "react-router-dom";

const Ad = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="lg:block hidden bg-[url('https://i.ibb.co/5jLnNKk/business-concept-with-graphic-holography-1.png')] bg-blend-overlay  bg-cover bg-center lg:bg-black py-[54px] relative">
        <div className="flex mx-4 max-w-7xl lg:mx-auto justify-between items-center gap-x-8">
          <div className="text-center lg:text-left">
            <div className="flex justify-center items-start gap-x-3">
              {/* <img className="-ml-8" src="https://i.ibb.co/0md3Wy5/Star-41.png" alt="" /> */}
              <h3 className="text-4xl lg:text-6xl font-red font-bold text-white mb-6">
                Six specialists will work for your project
              </h3>
            </div>
            <p className="text-white mt-8 mb-8">
              A team of six specialists is dedicated to your project, contributing their expertise to ensure its success. Each specialist possesses unique skills in their respective fields, forming a diverse and highly capable team that complements one another. Together, they create a dynamic work environment where ideas flow, challenges are overcome, and innovative solutions are forged. The team consists of a skilled project manager, an adept software developer, a visionary designer, an experienced data analyst, a savvy marketing expert, and a proficient communicator and collaborator. Their collective efforts drive the project forward, ensuring its objectives are met with excellence.
            </p>
            <Link to='/services' onClick={toTop}><button className="bg-[#FFE500] px-10 py-4 lg:px-10 lg:py-4 text-black rounded-lg font-semibold">See Our Services</button></Link>

          </div>
          <img className="hidden w-[550px] lg:block" src="https://i.ibb.co/2FWwP8L/Group-1000003444-4.png" alt="" />
        </div>
      </div>
      {/* Mobile responsive */}
      <div className="lg:hidden flex flex-col items-center justify-center">
        <h1 className="text-center lg:text-left text-[#149CE6] lg:text-black text-[20px] lg:text-[62px] leading-[30px] py-[30px] lg:leading-[72px] font-red w-[274px] mx-auto">Six specialists will work for your project</h1>

        <img className="mt-[24px] w-auto mx-auto" src="https://i.ibb.co/98XVkpG/CARD.png" alt="" />
        <img className="mt-[40px] w-auto mx-auto" src="https://i.ibb.co/zRBYVB1/CARD-1.png" alt="" />
        <img className="mt-[40px] w-auto mx-auto" src="https://i.ibb.co/KL6r13C/CARD-2.png" alt="" />
        <img className="mt-[40px] w-auto mx-auto" src="https://i.ibb.co/VTRCrsx/card-3.png" alt="" />
        <img className="mt-[40px] w-auto mx-auto" src="https://i.ibb.co/M9HMvtd/CARD-4.png" alt="" />
        <img className="mt-[40px] mb-[30px] w-auto mx-auto" src="https://i.ibb.co/QfBvP12/CARDS-5.png" alt="" />

        <Link to='/services' onClick={toTop}><button className="bg-[#1973E3] w-[170px] mx-auto h-[52px] text-black rounded-lg">See Our Services</button></Link>
      </div>
    </>
  );
};

export default Ad;
