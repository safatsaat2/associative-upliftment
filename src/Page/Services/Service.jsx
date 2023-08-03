import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
        <h1 className="text-4xl lg:text-[64px] font-semibold font-sans text-center my-8">
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
          <Link to='/signup'>
            <button
              className={`bg-black text-white px-10 py-4 rounded-xl`}
            >
              Take This Service
            </button>
          </Link>
        </div>

      </div>
      <Footer child="ok" />
    </>
  );
};

export default Service;
