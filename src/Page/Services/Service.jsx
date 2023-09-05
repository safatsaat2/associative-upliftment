import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Home/Footer";
// import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
// import moment from "moment/moment";

const Service = () => {
  const { user } = useContext(AuthContext);
  // const [value, setValue] = useState("");
  const [servicesData, setServicesData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);



  const [filtered] = servicesData.filter((data) => data.id === id);
  console.log(filtered);

  return (
    <>
      <img src={filtered?.banner} alt="" className="mb-4 w-full" />
      <div id="top" className="max-w-7xl mx-2 lg:mx-auto">
        {/* <h1 className="text-2xl lg:text-[64px] font-semibold font-sans text-center my-8 lg:my-20">
          {filtered?.title}
        </h1> */}

        <p className=" mt-6 text-sm lg:text-base">{filtered?.description}</p>
        <p className=" mt-6 text-sm lg:text-base font-bold">{filtered?.whyUsTitle}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs1}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs2}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs3}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs4}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs5}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs6}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs7}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs8}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs9}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs10}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs11}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs12}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs13}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs14}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs15}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs16}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs17}</p>
        <p className=" mt-4 text-sm lg:text-base">{filtered?.whyUs18}</p>
        <div className="flex justify-center my-8">
          <Link to={user ? `/dashboard` : "/signup"}>
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
