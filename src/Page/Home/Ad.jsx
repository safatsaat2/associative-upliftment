import { Link } from "react-router-dom";

const Ad = () => {
    const toTop = () => {
        window.scrollTo(0, 0);
      };
  return (
    <>
      <div className="bg-black py-10">
        <div className="flex max-w-7xl mx-auto justify-between items-center gap-x-8">
          <div>
            <h3 className="text-6xl font-bold text-white">
              Six specialists will work for your project
            </h3>
            <p className="text-white mt-8 my-4">
            A team of six specialists is dedicated to your project, contributing their expertise to ensure its success. Each specialist possesses unique skills in their respective fields, forming a diverse and highly capable team that complements one another. Together, they create a dynamic work environment where ideas flow, challenges are overcome, and innovative solutions are forged. The team consists of a skilled project manager, an adept software developer, a visionary designer, an experienced data analyst, a savvy marketing expert, and a proficient communicator and collaborator. Their collective efforts drive the project forward, ensuring its objectives are met with excellence.
            </p>
            <Link to='/services' onClick={toTop}><button className="bg-white text-black rounded-lg lg:w-[217px] h-[48px] font-semibold">See Our Services</button></Link>
          </div>
          <img className="hidden lg:block" src="https://i.ibb.co/T2K4tLb/Group-57-1.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Ad;
