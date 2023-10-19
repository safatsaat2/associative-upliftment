import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const DashOurTeam = () => {

    const [team, setTeam] = useState([])
    useEffect(() =>{
        fetch('/team.json')
        .then(res => res.json())
        .then(data => setTeam(data))
    },[])
    return (
        <>
        <img className="w-5/6 mb-10 mx-auto" src="https://i.ibb.co/fQCsGKR/1-21.png" alt="" />
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6">

{team.map(t => <Link to={`/team/${t.id}`} key={t.id}>
    <div className="bg-white dashShadow rounded-[10px] cursor-pointer" key={t.id}>
    <img className="w-20 mx-auto pt-4 rounded-md" src={t.img} alt="" />
    <h1 className="text-2xl text-center mt-4 mx-4 text-black font-semibold">{t.teamName}</h1>
    <p className="text-md text-center mt-4 mx-4 text-black font-medium">Specialist at {t.industry}</p>
    <p className=" text-center py-4 mx-4">{t.info1}</p>
</div>
</Link>)}
</div>
        </>
        
    );
};

export default DashOurTeam;