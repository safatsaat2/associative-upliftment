import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const NewNavbar = () => {

    const [showSubMenu, setShowSubMenu] = useState(false)
    const [showTeam, setShowTeam] = useState(false)
    const [showAbout, setShowAbout] = useState(false)
    const [showTalent, setShowTalent] = useState(false)
    const [showStrategy, setShowStrategy] = useState(false)
    const subMenuShow = () => {

        setShowSubMenu(true)

    }

    const strategy = () => {
        setShowAbout(false)
        setShowTeam(false)
        setShowTalent(false)
        setShowStrategy(true)
    }
    const team = () => {

        setShowTalent(false)
        setShowStrategy(false)
        setShowAbout(false)
        setShowTeam(true)
    }
    const about = () => {

        setShowTeam(false)
        setShowTalent(false)
        setShowStrategy(false)
        setShowAbout(true)
    }
    const talent = () => {
        setShowTeam(false)

        setShowStrategy(false)
        setShowAbout(false)
        setShowTalent(true)
    }

    const handelFunction = (name) => {

        if (name === "Home") {
            return console.log("HI There Visit: https://sakiburdev.netlify.app/")
        }
        {
            if (name === "Strategy") {
                strategy()
            }
            if (name === "Team") {
                team()
            }
            if (name === "About") {
                about()
            }
            if (name === "Talent") {
                talent()
            }
            return subMenuShow()
        }

        // item.name ===  ? "" : subMenuShow || item.name === "Strategy" ? strategy : item.name === "Team" ? team : item.name === "About" ? about : item.name === "Talent" ?  talent : ""
    }

    const toTop = () => {
        window.scrollTo(0, 0);
    };

    const navigation = [
        { name: "Home", href: "/", },
        { name: "Team", href: "/services", onHover: "test" },
        { name: "Strategy", href: "/shop", onHover: "test" },
        { name: "About", href: "/about", onHover: "test" },
        { name: "Talent", href: "/contact", onHover: "test" },
        { name: "Category", href: "/contact", onHover: "test" },
    ];
    return (
        <>
            <div className="hidden bg-black w-full lg:block ">
                <div className="max-w-7xl mx-auto flex justify-end items-center ">
                    <div className='relative my-4'>
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-white ml-16  text-sm font-medium"
                                aria-current={item.current ? "page" : undefined}
                                onMouseOver={() => handelFunction(item.name)}


                            >
                                {item.name}
                            </Link>
                        ))}
                        <div onMouseOver={() => subMenuShow()} onMouseOut={() => setShowSubMenu(!showSubMenu)} className={showSubMenu ? 'bg-white pb-5 w-full  left-7 top-10 absolute z-10' : 'hidden'}>

                            {
                                showStrategy ? <>
                                    <div className=' grid grid-cols-2 justify-center gap-x-3 px-3'>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Market Penetration
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Market Expansion
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Product Development
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Diversification
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Merger and Acquisition
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Partnerships and Alliances
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Data Analytics
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Customer Personalization
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Employee Training
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Customer Feedback
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Continuous Improvement
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Market Research
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Mobile App Development
                                        </div>
                                        <div className="pt-5 text-sm cursor-pointer font-medium" >
                                            Brand Reinvention
                                        </div>
                                    </div>
                                </>
                                    :
                                    showTeam ?
                                        <>
                                            <div className=' grid grid-cols-2 justify-center gap-x-3 px-3'>
                                                <div className="pt-5 text-sm cursor-pointer font-medium" >
                                                    Strategy Stars Team
                                                </div>
                                                <div className="pt-5 text-sm cursor-pointer font-medium" >
                                                    Dynamic Squad Team
                                                </div>
                                                <div className="pt-5 text-sm cursor-pointer font-medium" >
                                                    Galaxy Gliders Team
                                                </div>
                                                <div className="pt-5 text-sm cursor-pointer font-medium" >
                                                    Titans Alliance Team
                                                </div>
                                                <div className="pt-5 text-sm cursor-pointer font-medium" >
                                                    Dragon Squad Team
                                                </div>
                                                <div className="pt-5 text-sm cursor-pointer font-medium" >
                                                    Galactic Guardians Team
                                                </div>
                                            </div>

                                        </>
                                        :
                                        showAbout ?
                                            <>
                                                <div className=' grid grid-cols-2 justify-center gap-x-3 px-3'>
                                                    <Link to="/about" onClick={toTop}>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            About us
                                                        </div>
                                                    </Link>
                                                    <Link to="/privacy" onClick={toTop}>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Privacy Policy
                                                        </div>
                                                    </Link>
                                                    <div className="pt-5 text-sm cursor-pointer font-medium">
                                                        Careers
                                                    </div>
                                                    <Link to="/terms&conditions" onClick={toTop}>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Terms and Conditions
                                                        </div>
                                                    </Link>
                                                    <div className="pt-5 text-sm cursor-pointer font-medium">
                                                        Team
                                                    </div>
                                                    <div className="pt-5 text-sm cursor-pointer font-medium">
                                                        Our Impact
                                                    </div>
                                                </div>

                                            </>
                                            :
                                            showTalent ?
                                                <>
                                                    <div className=' grid grid-cols-2 justify-center gap-x-3 px-3'>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Core Service Skills
                                                        </div>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Time Management
                                                        </div>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Project Management
                                                        </div>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Customer Service
                                                        </div>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Client Management
                                                        </div>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Problem-Solving
                                                        </div>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Creativity
                                                        </div>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Research Skills
                                                        </div>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Communication
                                                        </div>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Self-Motivation
                                                        </div>
                                                        <div className="pt-5 text-sm cursor-pointer font-medium">
                                                            Adaptability
                                                        </div>
                                                    </div>

                                                </>
                                                :
                                                <></>
                            }



                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default NewNavbar;