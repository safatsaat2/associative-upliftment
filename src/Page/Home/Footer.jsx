import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="border-t-2 w-full border-black">
      <div className="mt-[167px] mb-16 grid grid-cols-1 lg:max-w-[1076px] lg:mx-auto lg:grid-cols-3 gap-x-[95px]   items-center">
        <div className=" mx-auto">
          <img src="https://i.ibb.co/S09RC71/au-logo-02-1.png" alt="" />
          <p className="text-base font-sans mt-6">
            We take immense pride in delivering outstanding services to our
            esteemed customers across the globe. We invite you to explore our
            comprehensive range of top-notch service offerings.
          </p>
        </div>
        <div>
          <h4 className="text-4xl">Information</h4>
          <div className="mt-12">
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
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-8 w-[208px]">
          <Icon className="text-5xl" icon="ri:facebook-fill" />
          <Icon className="text-5xl" icon="ri:twitter-line" />
          <Icon className="text-5xl" icon="ri:instagram-line" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
