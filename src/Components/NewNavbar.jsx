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
                                className="text-white ml-12  text-sm font-medium"
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
                                        <Link to="/strategy/marketPenetration">
                                            <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                                Market Penetration
                                            </div>
                                        </Link>
                                        <Link to="/strategy/marketExpansion">
                                            <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                                Market Expansion
                                            </div>
                                        </Link>
                                        <Link to="/strategy/productDevelopment">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Product Development
                                        </div>                                        
                                        </Link>
                                        <Link to="/strategy/diversification">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Diversification
                                        </div>
                                        </Link>
                                        <Link to="/strategy/mergerAndAcquistion">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Merger and Acquisition
                                        </div>
                                        </Link>
                                        <Link to="/strategy/partnershipsAndAlliances">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Partnerships and Alliances
                                        </div>
                                        
                                        </Link>
                                        <Link to="/strategy/dataAnalytics">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Data Analytics
                                        </div>
                                        </Link>
                                        <Link to="/strategy/customerPersonalization">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Customer Personalization
                                        </div>
                                        </Link>
                                        <Link to="/strategy/employeeTraining">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Employee Training
                                        </div>
                                        </Link>
                                        <Link to="/strategy/customerFeedback">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Customer Feedback
                                        </div>
                                        </Link>
                                        <Link to="/strategy/continuousImprovement">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Continuous Improvement
                                        </div>
                                        </Link>
                                        <Link to="/strategy/marketResearch">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Market Research
                                        </div>
                                        </Link>
                                        <Link to="/strategy/mobileAppDevelopment">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Mobile App Development
                                        </div>
                                        </Link>
                                        <Link to="/strategy/brandReinvention">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Brand Reinvention
                                        </div>
                                        </Link>
                                        <Link to="/strategy/franchising">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Franchising
                                        </div>
                                        </Link>
                                        <Link to="/strategy/verticalIntegration">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Vertical Integration
                                        </div>
                                        </Link>
                                        <Link to="/strategy/horizontalIntegration">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Horizontal Integration
                                        </div>
                                        </Link>
                                        <Link to="/strategy/e-commerceAndOnlineExpansion">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            E-commerce and Online Expansion
                                        </div>
                                        </Link>
                                        <Link to="/strategy/exporting">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Exporting
                                        </div>
                                        </Link>
                                        <Link to="/strategy/innovation">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Innovation
                                        </div>
                                        </Link>
                                        <Link to="/strategy/customerRetention">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Customer Retention
                                        </div>
                                        </Link>
                                        <Link to="/strategy/customerAcquisition">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Customer Acquisition
                                        </div>
                                        </Link>
                                        <Link to="/strategy/diversifiedMarketing">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Diversified Marketing
                                        </div>
                                        </Link>
                                        <Link to="/strategy/data-DrivenDecisions">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Data-Driven Decisions
                                        </div>
                                        </Link>
                                        <Link to="/strategy/efficiencyImprovements">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Efficiency Improvements
                                        </div>
                                        </Link>
                                        <Link to="/strategy/employeeDevelopment">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Employee Development
                                        </div>
                                        </Link>
                                        <Link to="/strategy/sustainabilityAndCorporateSocialResponsibility">
                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                            Sustainability and Corporate Social Responsibility
                                        </div>
                                        </Link>
         
                                    </div>
                                </>
                                    :
                                    showTeam ?
                                        <>
                                            <div className=' grid grid-cols-2 justify-center gap-x-3 px-3'>
                                                <Link to="/team/1">
                                                    <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                                        Strategy Stars Team
                                                    </div>
                                                </Link>
                                                <Link to="/team/2">
                                                    <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                                        Dynamic Squad Team
                                                    </div>
                                                </Link>
                                                <Link to="/team/3">
                                                    <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                                        Galaxy Gliders Team
                                                    </div>
                                                </Link>
                                                <Link to="/team/4">
                                                    <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                                        Titans Alliance Team
                                                    </div>
                                                </Link>
                                                <Link to="/team/5">
                                                    <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                                        Dragon Squad Team
                                                    </div>
                                                </Link>
                                                <Link to="/team/6">
                                                    <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium" >
                                                        Galactic Guardians Team
                                                    </div>
                                                </Link>
                                            </div>

                                        </>
                                        :
                                        showAbout ?
                                            <>
                                                <div className=' grid grid-cols-2 justify-center gap-x-3 px-3'>
                                                    <Link to="/about" onClick={toTop}>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            About us
                                                        </div>
                                                    </Link>
                                                    <Link to="/privacy" onClick={toTop}>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Privacy Policy
                                                        </div>
                                                    </Link>
                                                    <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                        Careers
                                                    </div>
                                                    <Link to="/terms&conditions" onClick={toTop}>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Terms and Conditions
                                                        </div>
                                                    </Link>
                                                    <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                        Team
                                                    </div>
                                                    <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                        Our Impact
                                                    </div>
                                                </div>

                                            </>
                                            :
                                            showTalent ?
                                                <>
                                                    <div className=' grid grid-cols-2 justify-center gap-x-3 px-3'>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Core Service Skills
                                                        </div>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Time Management
                                                        </div>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Project Management
                                                        </div>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Customer Service
                                                        </div>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Client Management
                                                        </div>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Problem-Solving
                                                        </div>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Creativity
                                                        </div>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Research Skills
                                                        </div>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Communication
                                                        </div>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
                                                            Self-Motivation
                                                        </div>
                                                        <div className="mt-5 hover:text-[#1973E3] text-sm cursor-pointer font-medium">
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