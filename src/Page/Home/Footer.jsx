import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = ({child}) => {
  return (
    <div className="border-t-2 w-full border-black">
      <div className={child !== " " ? 'my-16 grid grid-cols-1 lg:max-w-[1076px] mx-2 lg:mx-auto lg:grid-cols-3 gap-x-[95px]   items-center' : 'mt-16 lg:mt-[167px] mb-4 grid grid-cols-1 lg:max-w-[1076px] mx-2 gap-y-4 lg:mx-auto lg:grid-cols-3 gap-x-[95px]   items-center'}>
        <div className=" mx-auto">
          <img src="https://i.ibb.co/S09RC71/au-logo-02-1.png" alt="" />
          <p className="text-base font-sans mt-6">
            We take immense pride in delivering outstanding services to our
            esteemed customers across the globe. We invite you to explore our
            comprehensive range of top-notch service offerings.
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-bold mt-5 lg:mt-0">About</h4>
          <div className="mt-6">
            <Link to="/about">
              <div className="mt-5 text-lg font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                About us
              </div>
            </Link>

            <Link to="/about">
              <div className="mt-5 text-lg font-medium hover:bg-black hover:text-white hover:px-2 duration-1000 hover:text-center hover:py-2 rounded-md">
                Contact
              </div>
            </Link>

            <Link to="/about">
              <div className="mt-5 text-lg font-medium hover:bg-black hover:text-white hover:px-2 duration-1000 hover:text-center hover:py-2 rounded-md">
                Careers
              </div>
            </Link>
          </div>
          {/* <div className="mt-12">
            <div className="flex  items-center">
              <Icon className="text-2xl mr-4" icon="ic:outline-email" />
              <p className="leading-[155%] text-base font-sans">
                sulymanahmedbd@gmail.com
              </p>
            </div>
            <div className="flex  items-center mt-[22px]">
              <Icon className="text-2xl mr-4" icon="ic:outline-phone" />
              <p className="leading-[155%] text-base font-sans">
                +880 1568-723929
              </p>
            </div> */}
          {/* </div> */}
        </div>
        <div>
          <h4 className="text-2xl font-bold mt-5 lg:mt-0">Support Links</h4>
          <div className="mt-6">
            <Link to="/privacy">
              <div className="mt-5 text-lg font-medium hover:bg-black hover:text-white hover:px-2 duration-500 hover:text-center hover:py-2 rounded-md">
                Privacy Policy
              </div>
            </Link>

            <Link to="/terms&conditions">
              <div className="mt-5 text-lg font-medium hover:bg-black hover:text-white hover:px-2 duration-1000 hover:text-center hover:py-2 rounded-md">
                Terms & Condition
              </div>
            </Link>

            <Link to="/about">
              <div className="mt-5 text-lg font-medium hover:bg-black hover:text-white hover:px-2 duration-1000 hover:text-center hover:py-2 rounded-md">
                Our Team
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-x-8 my-6 justify-center pt-4 border-t border-black">
        <a href="https://www.facebook.com/Associative.Upliftment?mibextid=ZbWKwL" target="blank"><Icon className="text-2xl" icon="ri:facebook-fill" /></a>
        <a href="https://www.youtube.com/@AssociativeUpliftment" target="blank"><Icon className="text-2xl" icon="iconoir:youtube" /></a>
        <a href="https://instagram.com/associative_upliftment?igshid=NjIwNzIyMDk2Mg==" target="blank"><Icon className="text-2xl" icon="ri:instagram-line" /></a>
        <a href="https://www.linkedin.com/company/associative-upliftment/" target="blank"><Icon className="text-2xl" icon="teenyicons:linkedin-outline" /></a>
      </div>
    </div>
  );
};

export default Footer;
