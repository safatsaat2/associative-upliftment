import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Home/Footer";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from "moment/moment";

const Service = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [servicesData, setServicesData] = useState([]);
  const { id } = useParams();

  console.log();
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);

  const submit = (event) => {
    event.preventDefault();

    const serviceName = filtered?.title;
    const price = value;
    const status = "";
    const email = user?.email;
    const date = moment().format("MMMM Do YYYY, h:mm:ss a");
    const id = Math.floor(Math.random() * 100000);

    const order = { serviceName, price, status, email, date, id };

    axios
      .post("https://associative-upliftment-server.vercel.app/orders", order)
      .then((res) => {
        console.log(res);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const [filtered] = servicesData.filter((data) => data.id === id);
  console.log(filtered);

  return (
    <>
      <div id="top" className="max-w-7xl mx-auto">
        <h1 className="text-[64px] font-semibold font-sans text-center mt-8">
          {filtered?.title}
        </h1>
        <p className=" mt-6">{filtered?.description}</p>
        <p className=" mt-6 font-bold">{filtered?.whyUsTitle}</p>
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
          <button
            onClick={() => window.my_modal_2.showModal()}
            className={`bg-black text-white px-10 py-4 rounded-xl`}
          >
            Take This Service
          </button>
        </div>
        {/* Open the modal using ID.showModal() method */}
        <dialog id="my_modal_2" className="modal">
          <form onSubmit={submit} method="dialog" className="modal-box py-20">
            <h3 className="font-bold text-2xl text-center">
              {filtered?.title}
            </h3>
            <div className="flex gap-x-20 mt-6 justify-center">
              <div>
                <div className="form-control flex items-center flex-row mt-6">
                  <div className="flex gap-x-4 justify-center">
                    <input
                      type="radio"
                      name="radio-10"
                      value="30"
                      className="radio checked:bg-black-500"
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                    <p className="label-text">Month</p>
                  </div>
                </div>
                <div className="form-control flex items-center flex-row mt-6">
                  <div className="flex gap-x-4 justify-center">
                    <input
                      type="radio"
                      name="radio-10"
                      value={value}
                      className="radio checked:bg-black-500"
                      onChange={handleChange}
                    />
                    <p className="label-text">Others</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-6">$30</p>
                <p className="mt-6">$150</p>
                <p className="mt-6">$600</p>
                <div className="form-control">
                  <input
                    className="border w-[190px] border-black rounded-lg mt-6"
                    name="others"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
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
      <Footer child="ok" />
    </>
  );
};

export default Service;
