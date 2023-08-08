import { useEffect, useState } from "react";
import Footer from "../Home/Footer";
import { Link, useParams } from "react-router-dom";



const PopularDetails = () => {
    const {id} = useParams()
    const [datas, setDatas] = useState([])


    useEffect(()=>{
        fetch('/popularService.json')
        .then(res=> res.json())
        .then(datas => setDatas(datas))
    },[])

  const [filteredData] = datas.filter(data => data.id === id)
  console.log(filteredData)

    return (
        <>
      <div id="top" className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-[64px] font-semibold font-sans text-center my-8">
          {filteredData?.title}
        </h1>
        <p className=" mt-6">{filteredData?.description}</p>
        <p className=" mt-6 font-bold">{filteredData?.whyUsTitle}</p>
        <p className=" mt-4">{filteredData?.whyUs1}</p>
        <p className=" mt-4">{filteredData?.whyUs2}</p>
        <p className=" mt-4">{filteredData?.whyUs3}</p>
        <p className=" mt-4">{filteredData?.whyUs4}</p>
        <p className=" mt-4">{filteredData?.whyUs5}</p>
        <p className=" mt-4">{filteredData?.whyUs6}</p>
        <p className=" mt-4">{filteredData?.whyUs7}</p>
        <p className=" mt-4">{filteredData?.whyUs8}</p>
        <p className=" mt-4">{filteredData?.whyUs9}</p>
        <p className=" mt-4">{filteredData?.whyUs10}</p>
        <p className=" mt-4">{filteredData?.whyUs11}</p>
        <p className=" mt-4">{filteredData?.whyUs12}</p>
        <p className=" mt-4">{filteredData?.whyUs13}</p>
        <p className=" mt-4">{filteredData?.whyUs14}</p>
        <p className=" mt-4">{filteredData?.whyUs15}</p>
        <p className=" mt-4">{filteredData?.whyUs16}</p>
        <p className=" mt-4">{filteredData?.whyUs17}</p>
        <p className=" mt-4">{filteredData?.whyUs18}</p>
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

export default PopularDetails;