import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import OurTeamBanner from "../../Components/OurTeamBanner";

const DashOurTeam = () => {
    const items = [
        {
            id:1,
            h3:"MD SULYMAN",
            img:"https://i.ibb.co/gv8mykx/Rectangle-6573.png",
            quote1:"Success often requires taking calculated risks, so don't let the fear of failure hold you back; instead, use failures as stepping stones toward your goals. Stay focused and persistent in your pursuits, adapting as needed, and success will become more attainable. ",
            quote2: "To succeed in business, prioritize customer satisfaction by consistently delivering value and exceptional service. Always be adaptable and open to change, as the business landscape is ever-evolving, and the ability to pivot can be the difference between success and stagnation."
        },
        {
            id:2,
            h3:"Sakibur Rahman",
            img:"https://i.ibb.co/dK861gJ/Rectangle-6573-1.png",
            quote1:"To recharge in the market, regularly assess your competitors, customer preferences, and emerging trends to stay ahead of the curve and adapt your strategies accordingly. Stay agile and be ready to innovate and pivot when necessary to remain competitive and relevant in an ever-changing business environment. That is success",
            quote2: ""
        },
        {
            id:3,
            h3:"MD Kawsar Ahmed",
            img:"https://i.ibb.co/5GfLnbt/Rectangle-6573-2.png",
            quote1:"When setting business goals, make them specific, measurable, and time-bound to provide clarity and motivation for your team. Regularly review and adjust these goals to ensure they remain aligned with your company's vision and the evolving market dynamics.",
            quote2: ""
        },
        {
            id:4,
            h3:"Milad Al Rafat",
            img:"https://i.ibb.co/r4k391K/Rectangle-6573-3.png",
            quote1:"do something new Don't rely on others. Do something Success often requires taking calculated risks, so don't let the fear of failure hold you back; instead, use failures as stepping stones toward your goals. Stay focused and persistent in your pursuits, adapting as needed, and success will become more attainable.",
            quote2: ""
        },
        {
            id:5,
            h3:"RT Ibrahim Ahmed",
            img:"https://i.ibb.co/nDTNbqj/Rectangle-6573-4.png",
            quote1:"Effective product marketing involves clearly defining your target audience, understanding their needs and pain points, and crafting a compelling narrative that showcases how your product can solve their problems. Utilize various marketing channels and platforms to reach your audience where they are most active, and continuously gather feedback and data to refine your marketing strategies for optimal results.",
            quote2: ""
        },
    ]

    const [team, setTeam] = useState([])
    useEffect(() =>{
        fetch('/team.json')
        .then(res => res.json())
        .then(data => setTeam(data))
    },[])
    return (
        <>
        {items.map(item => <div className="mb-10" key={item?.id}>
            <OurTeamBanner  h3={item?.h3} img={item?.img} quote1={item?.quote1} quote2={item?.quote2} />
        </div>)}
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