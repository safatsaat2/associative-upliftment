import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = ({ child }) => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="border-t lg:block hidden border-b w-full border-black relative pb-4">
        <div className={child !== " " ? 'my-24 grid grid-cols-1 relative lg:max-w-[1076px] mx-2 lg:mx-auto lg:flex gap-x-[95px] justify-center  items-start' : 'mt-16 lg:mt-[167px] mb-4  grid grid-cols-1 lg:max-w-[1076px] mx-2 gap-y-4 lg:mx-auto lg:flex gap-x-[95px] items-start'}>
          <div>
            <h4 className="text-xl font-bold mt-5 lg:mt-0">Strategy</h4>
            <div className="mt-10">

              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Market Penetration
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Market Expansion
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Product Development
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Diversification
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Merger and Acquisition
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Partnerships and Alliances
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Data Analytics
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Customer Personalization
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Employee Training
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Customer Feedback
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Continuous Improvement
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Market Research
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Mobile App Development
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Brand Reinvention
              </div>

            </div>

          </div>
          <div>
            <h4 className="text-xl font-bold mt-5 lg:mt-0">Talent</h4>
            <div className="mt-10">

              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Core Service Skills
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Time Management
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Project Management
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Customer Service
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Client Management
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Problem-Solving
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Creativity
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Research Skills
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Communication
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Self-Motivation
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Adaptability
              </div>
            </div>

          </div>
          <div>
            <h4 className="text-xl font-bold mt-5 lg:mt-0">Categories</h4>
            <div className="mt-10">

              <Link to="/services/1" onClick={toTop}>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Business Management
                </div>
              </Link>
              <Link to="/services/2" onClick={toTop}>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Digital Marketing
                </div>
              </Link>
              <Link to="/services/3" onClick={toTop}>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Web Development
                </div>
              </Link>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                App Development
              </div>
              <Link to="/services/4" onClick={toTop}>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Graphic Design
                </div>
              </Link>
              <Link to="/services/5" onClick={toTop}>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Email marketing
                </div>
              </Link>
              <Link to="/services/6" onClick={toTop}>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Video Editor
                </div>
              </Link>
              <Link to="/services/8" onClick={toTop}>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Data entry
                </div>
              </Link>
              <Link to="/services/9" onClick={toTop}>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Music & Audio
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mt-5 lg:mt-0">About</h4>
            <div className="mt-10">

              <Link to="/about" onClick={toTop}>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  About us
                </div>
              </Link>
              <Link to="/privacy" onClick={toTop}>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Privacy Policy
                </div>
              </Link>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Careers
              </div>
              <Link to="/terms&conditions" onClick={toTop}>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Terms and Conditions
                </div>
              </Link>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Team
              </div>
              <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Our Impact
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="py-6 hidden lg:flex mx-5 justify-between items-center">
        <div className="flex items-center justify-center gap-x-2">
          <img src="https://i.ibb.co/S7t2yY9/logo-Associative-Upliftment.png" className='w-12 rounded-full' alt="" />
          <p className='text-xl font-bold font-itc text-[#602A2A]'>Associative Upliftment</p>
        </div>

        <div className="flex gap-x-8 justify-center items-center">
          <p className="text-center mt-[10px]"> Global Service</p>
          <a href="https://www.facebook.com/Associative.Upliftment?mibextid=ZbWKwL" target="blank"><Icon className="text-2xl" icon="ri:facebook-fill" /></a>
          <a href="https://instagram.com/associative_upliftment?igshid=NjIwNzIyMDk2Mg==" target="blank"><Icon className="text-2xl" icon="ri:instagram-line" /></a>
          <a href="https://www.linkedin.com/company/associative-upliftment/" target="blank"><Icon className="text-2xl" icon="teenyicons:linkedin-outline" /></a>

          <a href="https://www.youtube.com/@AssociativeUpliftment" target="blank"><Icon className="text-2xl" icon="iconoir:youtube" /></a>
        </div>
      </div>
      <div className="lg:hidden block border-t  border-black relative pb-4">
        <div className={child !== " " ? 'my-24 grid grid-cols-1 relative lg:max-w-[1076px] mx-2 lg:mx-auto lg:flex gap-x-[95px] justify-center  items-start' : 'border-b border-black'}>
          <div className="collapse mx-[20px] w-[300px]">
            <input type="checkbox" className="peer w-[300px]" />
            <div className="collapse-title w-[300px] mx-auto flex justify-between items-center">
              <h4 className="text-xl">Strategy</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                <path d="M1 1L8 7.5L15 1" stroke="#1973E3" strokeWidth="2" />
              </svg>
            </div>
            <div className="collapse-content w-[300px] mx-auto ">
              <div className="mt-2">

                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Market Penetration
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Market Expansion
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Product Development
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Diversification
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Merger and Acquisition
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Partnerships and Alliances
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Data Analytics
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Customer Personalization
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Employee Training
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Customer Feedback
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Continuous Improvement
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Market Research
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Mobile App Development
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md text-center">
                  Brand Reinvention
                </div>

              </div>
            </div>
          </div>




          <div className="collapse mx-[20px] w-[300px]">
            <input type="checkbox" className="peer w-[300px]" />
            <div className="collapse-title w-[300px] mx-auto flex justify-between items-center">
              <h4 className="text-xl">Talent</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                <path d="M1 1L8 7.5L15 1" stroke="#1973E3" strokeWidth="2" />
              </svg>
            </div>
            <div className="collapse-content w-[300px] mx-auto ">
              <div className="mt-10">

                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Core Service Skills
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Time Management
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Project Management
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Customer Service
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Client Management
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Problem-Solving
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Creativity
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Research Skills
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Communication
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Self-Motivation
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Adaptability
                </div>
              </div>
            </div>
          </div>


          <div className="collapse mx-[20px] w-[300px]">
            <input type="checkbox" className="peer w-[300px]" />
            <div className="collapse-title w-[300px] mx-auto flex justify-between items-center">
              <h4 className="text-xl">Categories</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                <path d="M1 1L8 7.5L15 1" stroke="#1973E3" strokeWidth="2" />
              </svg>
            </div>
            <div className="collapse-content w-[300px] mx-auto ">
              <div className="mt-10">

                <Link to="/services/1" onClick={toTop}>
                  <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                    Business Management
                  </div>
                </Link>
                <Link to="/services/2" onClick={toTop}>
                  <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                    Digital Marketing
                  </div>
                </Link>
                <Link to="/services/3" onClick={toTop}>
                  <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                    Web Development
                  </div>
                </Link>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  App Development
                </div>
                <Link to="/services/4" onClick={toTop}>
                  <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                    Graphic Design
                  </div>
                </Link>
                <Link to="/services/5" onClick={toTop}>
                  <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                    Email marketing
                  </div>
                </Link>
                <Link to="/services/6" onClick={toTop}>
                  <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                    Video Editor
                  </div>
                </Link>
                <Link to="/services/8" onClick={toTop}>
                  <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                    Data entry
                  </div>
                </Link>
                <Link to="/services/9" onClick={toTop}>
                  <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                    Music & Audio
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="collapse mx-[20px] w-[300px]">
            <input type="checkbox" className="peer w-[300px]" />
            <div className="collapse-title w-[300px] mx-auto flex justify-between items-center">
              <h4 className="text-xl">About</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                <path d="M1 1L8 7.5L15 1" stroke="#1973E3" strokeWidth="2" />
              </svg>
            </div>
            <div className="collapse-content w-[300px] mx-auto ">
              <div className="mt-10">

                <Link to="/about" onClick={toTop}>
                  <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                    About us
                  </div>
                </Link>
                <Link to="/privacy" onClick={toTop}>
                  <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                    Privacy Policy
                  </div>
                </Link>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Careers
                </div>
                <Link to="/terms&conditions" onClick={toTop}>
                  <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                    Terms and Conditions
                  </div>
                </Link>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Team
                </div>
                <div className="mt-5 text-base cursor-pointer font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                  Our Impact
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col mx-5 justify-between items-center">
          <div className="flex items-center justify-center gap-x-2">
            <img src="https://i.ibb.co/S7t2yY9/logo-Associative-Upliftment.png" className='w-12 rounded-full' alt="" />
            <p className='text-xl font-bold font-itc text-[#602A2A]'>Associative Upliftment</p>
          </div>

          <p className="text-center my-4"> Global Service</p>

          <div className="flex gap-x-8  justify-center items-center">

            <a href="https://www.facebook.com/Associative.Upliftment?mibextid=ZbWKwL" target="blank"><Icon className="text-2xl" icon="ri:facebook-fill" /></a>
            <a href="https://instagram.com/associative_upliftment?igshid=NjIwNzIyMDk2Mg==" target="blank"><Icon className="text-2xl" icon="ri:instagram-line" /></a>
            <a href="https://www.linkedin.com/company/associative-upliftment/" target="blank"><Icon className="text-2xl" icon="teenyicons:linkedin-outline" /></a>

            <a href="https://www.youtube.com/@AssociativeUpliftment" target="blank"><Icon className="text-2xl" icon="iconoir:youtube" /></a>
          </div>
        </div>
      </div>
    </>

  );
};

export default Footer;
