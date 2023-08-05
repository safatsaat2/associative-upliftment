import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Services = ({ children }) => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  const services = [
    {
      id: "1",
      icon: "mdi:business-outline",
      name: "Business Management Specialist Team",
      description:
        "Business management refers to the process of overseeing and controlling various aspects of a business to achieve its objectives.",
    },
    {
      id: "2",
      icon: "nimbus:marketing",
      name: "Digital Marketing Specialist Team",
      description:
        "Digital marketing refers to the practice of promoting products, services, or brands using digital channels and technologies.",
    },
    {
      id: "3",
      icon: "fluent:developer-board-16-regular",
      name: "Web Development Specialist Team",
      description:
        "Web development refers to the process of designing, creating, and maintaining websites and web applications.",
    },
    {
      id: "4",
      icon: "material-symbols:graphic-eq",
      name: "Graphic Design Specialist Team",
      description:
        "Graphic design is the art and practice of creating visual content using various elements such as typography, images, illustrations, and colors.",
    },
    {
      id: "5",
      icon: "mdi:email-sync-outline",
      name: "Email marketing Specialist Team",
      description:
        "Email marketing refers to the use of email to promote products, services, or brands and to engage with a target audience.",
    },
    {
      id: "6",
      icon: "dashicons:editor-video",
      name: "Video Editor Specialist Team",
      description:
        "Video editing is the process of manipulating and rearranging video footage to create a final edited product.",
    },
    {
      id: "7",
      icon: "tabler:writing",
      name: "Writing & translation Specialist Team",
      description:
        "Video editing is the process of manipulating and rearranging video footage to create a final edited product.",
    },
    {
      id: "8",
      icon: "bx:data",
      name: "Data Specialist Team",
      description:
        "Video editing is the process of manipulating and rearranging video footage to create a final edited product.",
    },
    {
      id: "9",
      icon: "tabler:music",
      name: "Music & Audio Specialist Team",
      description:
        "Video editing is the process of manipulating and rearranging video footage to create a final edited product.",
    },
    {
      id: "10",
      icon: "streamline:image-camera-1-photos-picture-camera-photography-photo-pictures",
      name: "Photography Specialist Team",
      description:
        "Video editing is the process of manipulating and rearranging video footage to create a final edited product.",
    },
  ];
  return (
    <div className="mt-20">
      <h1
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="text-2xl lg:text-[64px] font-semibold text-center leading-[135%]"
      >
        Our Services
      </h1>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="text-md lg:text-xl text-[#414141] leading-[145%] mt-4 mb-10 text-center"
      >
        Delivering Exceptional Solutions
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[92px] gap-y-[75px] max-w-7xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.name}
            to={children ? `${service.id}` : `services/${service.id}`}
          >
            <div
              className="shadow h-[250px] lg:h-[300px] flex flex-col justify-center items-center hover:-translate-y-2 duration-500 cursor-pointer mx-6"
              onClick={toTop}
            >
              <Icon
                className="text-center text-6xl lg:text-[80px] mt-[34px] mb-2"
                icon={service.icon}
              />

              <h3 className="text-[12px] lg:text-lg font-semibold text-center mb-4">
                {service.name}
              </h3>
              <p className="text-center text-[8px] lg:text-[16px] px-5 text-[#414141] mb-[34px]">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-20">{children}</div>
    </div>
  );
};

export default Services;
