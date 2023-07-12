import { Icon } from "@iconify/react";

const Services = () => {
  const services = [
    {
      icon: "mdi:business-outline",
      name: "Business Management",
      description:
        "Business management refers to the process of overseeing and controlling various aspects of a business to achieve its objectives.",
    },
    {
      icon: "nimbus:marketing",
      name: "Digital Marketing",
      description:
        "Digital marketing refers to the practice of promoting products, services, or brands using digital channels and technologies.",
    },
    {
      icon: "fluent:developer-board-16-regular",
      name: "Web Development",
      description:
        "Web development refers to the process of designing, creating, and maintaining websites and web applications.",
    },
    {
      icon: "material-symbols:graphic-eq",
      name: "Graphic Design",
      description:
        "Graphic design is the art and practice of creating visual content using various elements such as typography, images, illustrations, and colors.",
    },
    {
      icon: "mdi:email-sync-outline",
      name: "Email marketing",
      description:
        "Email marketing refers to the use of email to promote products, services, or brands and to engage with a target audience.",
    },
    {
      icon: "dashicons:editor-video",
      name: "Video Editor",
      description:
        "Video editing is the process of manipulating and rearranging video footage to create a final edited product.",
    },
  ];
  return (
    <div className="mt-20">
      <h1 className="text-[64px] font-semibold text-center leading-[135%]">
        Our Services
      </h1>
      <p className="text-xl text-[#414141] leading-[145%] mt-4 mb-10 text-center">
        Delivering Exceptional Solutions
      </p>
      <div className="grid grid-cols-3 gap-x-[92px] gap-y-[75px]">
        {services.map((service) => (
          <div className="shadow flex flex-col justify-center items-center" key={service.name}>

              <Icon className="text-center text-[80px] mt-[34px] mb-2" icon={service.icon} />

            <h3 className="text-2xl font-semibold text-center mb-4">
              {service.name}
            </h3>
            <p className="text-center px-5 text-[#414141] mb-[34px]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;