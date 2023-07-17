import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Home/Footer";

const Service = () => {
  const [servicesData, setServicesData] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch("/public/services.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);

  const [filtered] = servicesData.filter((data) => data.id === id);
  console.log(filtered);

  return (
    <>
      <div id="top" className="max-w-7xl mx-auto">
        <h1 className="text-[64px] font-semibold font-sans text-center mt-8">
          {filtered?.title}
        </h1>
        <p className=" mt-6">{filtered?.description}</p>
        <p className=" mt-6">{filtered?.whyUsTitle}</p>
        <p className=" mt-4">{filtered?.whyUs1}</p>
        <p className=" mt-4">{filtered?.whyUs2}</p>
        <p className=" mt-4">{filtered?.whyUs3}</p>
        <p className=" mt-4">{filtered?.whyUs4}</p>
        <p className=" mt-4">{filtered?.whyUs5}</p>
        <p className=" mt-4">{filtered?.whyUs6}</p>
        <p className=" mt-4">{filtered?.whyUs7}</p>
        <p className=" mt-4">{filtered?.whyUs8}</p>
        <p className=" mt-4">{filtered?.whyUs9}</p>
        <p className=" mt-4">{filtered?.whyUs10}</p>
        <p className=" mt-4">{filtered?.whyUs11}</p>
        <p className=" mt-4">{filtered?.whyUs12}</p>
        <p className=" mt-4">{filtered?.whyUs13}</p>
        <p className=" mt-4">{filtered?.whyUs14}</p>
        <p className=" mt-4">{filtered?.whyUs15}</p>
        <p className=" mt-4">{filtered?.whyUs16}</p>
        <p className=" mt-4">{filtered?.whyUs17}</p>
        <p className=" mt-4">{filtered?.whyUs18}</p>
        <div className="flex justify-center my-8">
          <button onClick={() => window.my_modal_2.showModal()} className={`bg-black text-white px-10 py-4 rounded-xl`}>
            Take This Service
          </button>
        </div>
        {/* Open the modal using ID.showModal() method */}
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-3xl text-center">{filtered?.title}</h3>
            <select>
              <option>hi</option>
              <option>hi</option>
              <option>hi</option>
              <option>hi</option>
            </select>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      <Footer />
    </>
  );
};

export default Service;
