import { Icon } from "@iconify/react";
import DashNav from "./DashNav";
import Dashboardtitle from "./Dashboardtitle";

const DashServices = () => {

  const services = [
    {
      id: "1",
      icon: "mdi:business-outline",
      name: "Business Management",
      description:
        "Business management refers to the process of overseeing and controlling various aspects of a business to achieve its objectives.",
    },
    {
      id: "2",
      icon: "nimbus:marketing",
      name: "Digital Marketing",
      description:
        "Digital marketing refers to the practice of promoting products, services, or brands using digital channels and technologies.",
    },
    {
      id: "3",
      icon: "fluent:developer-board-16-regular",
      name: "Web Development",
      description:
        "Web development refers to the process of designing, creating, and maintaining websites and web applications.",
    },
    {
      id: "4",
      icon: "material-symbols:graphic-eq",
      name: "Graphic Design",
      description:
        "Graphic design is the art and practice of creating visual content using various elements such as typography, images, illustrations, and colors.",
    },
    {
      id: "5",
      icon: "mdi:email-sync-outline",
      name: "Email marketing",
      description:
        "Email marketing refers to the use of email to promote products, services, or brands and to engage with a target audience.",
    },
    {
      id: "6",
      icon: "dashicons:editor-video",
      name: "Video Editor",
      description:
        "Video editing is the process of manipulating and rearranging video footage to create a final edited product.",
    },
  ];
  return (
    <div className="lg:flex">
      <DashNav />
      <div className="w-full lg:w-3/4 bg-slate-100 ">
        <Dashboardtitle/>
        <div className="my-20 mx-4">
      <div className="grid grid-cols-3 gap-x-[92px] gap-y-[75px] max-w-7xl mx-auto">
        {services.map((service) => (
          <>
            <div
              className="shadow h-[300px] flex flex-col justify-center items-center hover:-translate-y-2 duration-500 cursor-pointer"
              onClick={() => window.my_modal_2.showModal()}
            >
              <Icon
                className="text-center text-[80px] mt-[34px] mb-2"
                icon={service.icon}
              />

              <h3 className="text-2xl font-semibold text-center mb-4">
                {service.name}
              </h3>
              <p className="text-center px-5 text-[#414141] mb-[34px]">
                {service.description}
              </p>
            </div>
          </>
        ))}
      </div>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box py-20">
          <div className="flex gap-x-20 mt-6 justify-center">
            <div>
              <div className="form-control flex items-center flex-row mt-6">
                <div className="flex gap-x-4 justify-center">
                  <input
                    type="radio"
                    name="radio-10"
                    value="30"
                    className="radio checked:bg-black-500"
                    checked
                  />
                  <p className="label-text">Day</p>
                </div>
              </div>
              <div className="form-control flex items-center flex-row mt-6">
                <div className="flex gap-x-4 justify-center">
                  <input
                    type="radio"
                    name="radio-10"
                    value="150"
                    className="radio checked:bg-black-500"
                    checked
                  />
                  <p className="label-text">Week</p>
                </div>
              </div>
              <div className="form-control flex items-center flex-row mt-6">
                <div className="flex gap-x-4 justify-center">
                  <input
                    type="radio"
                    name="radio-10"
                    value="600"
                    className="radio checked:bg-black-500"
                    checked
                  />
                  <p className="label-text">Month</p>
                </div>
              </div>
              <div className="form-control flex items-center flex-row mt-6">
                <div className="flex gap-x-4 justify-center">
                  <input
                    type="radio"
                    name="radio-10"
                    value="30"
                    className="radio checked:bg-black-500"
                    checked
                  />
                  <p className="label-text">Others</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-6">$30</p>
              <p className="mt-6">$150</p>
              <p className="mt-6">$600</p>
              <input
                className="border w-[190px] border-black rounded-lg mt-6"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <input
              className="bg-black text-white rounded-lg px-14 py-4 cursor-pointer"
              type="submit"
            />
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
      </div>
    </div>
    
  );
};

export default DashServices;
