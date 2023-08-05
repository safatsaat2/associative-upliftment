import { useState } from "react";
import { useParams } from "react-router-dom";

const Team = ({ children }) => {

    const [data, setData] = useState([])
    const { id } = useParams()

    fetch('/team.json')
        .then(data => data.json())
        .then(data => setData(data))
    const [fillteredData] = data.filter((data) => data.id === id)

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl lg:text-[64px] font-semibold font-sans text-center my-8">
                {fillteredData?.teamName}
            </h1>
            <h2 className="text-xl lg:text-4xl font-medium font-sans text-center mt-4 mb-6">
                Speacialist At {fillteredData?.industry}
            </h2>
            <p className="mb-4">
                {fillteredData?.info1}
            </p>
            <p className="mb-4">
                {fillteredData?.info2}
            </p>
            <p className="mb-4">
                {fillteredData?.info3}
            </p>
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 gap-x-8 my-10 mx-auto">
            <img className="h-[300px] w-full rounded-md"  src={fillteredData?.img2} alt="" />
            <img className="h-[300px] w-full rounded-md"  src={fillteredData?.img3} alt="" />
            <img className="h-[300px] w-full rounded-md"  src={fillteredData?.img1} alt="" />

            </div>
            <p className="mb-4">
                {fillteredData?.info4}
            </p>
            <p className="mb-4">
                {fillteredData?.info5}
            </p>
            <p className="mb-4">
                {fillteredData?.info6}
            </p>
            <p className="mb-4">
                {fillteredData?.info7}
            </p>
            <p className="mb-4">
                {fillteredData?.info8}
            </p>
            </div>
            <div className="mt-20">{children}</div>
        </>
    );
};

export default Team;