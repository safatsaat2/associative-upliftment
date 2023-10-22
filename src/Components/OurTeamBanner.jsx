
const OurTeamBanner = ({quote1, quote2, h3, img}) => {
    return (
        <>
            <div style={{ background: "linear-gradient(90deg, #1973E3 32.81%, #000 82.2%)", WebkitBorderTopLeftRadius: "175px", WebkitBorderBottomRightRadius: "65px" }} className="max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-x-[46px]">
                    <div className="flex flex-col items-center px-10 lg:pl-[63px]">
                        <h3 className="bg-white text-[#1973E3] py-1 px-2 rounded-md text-xl mt-10 lg:mt-0 lg:py-[21px] lg:px-[27px] lg:rounded-[30px] lg:text-[50px] font-bold lg:leading-[74px]">
                            {h3}
                        </h3>
                        <p className="qoute1 text-center text-white text-[12px] lg:text-xl lg:leading-[30px] mt-4 lg:mt-[32px]">
                            {quote1}
                        </p>
                        {quote2 !== "" ? <p className="quote2 text-center text-white text-[12px] lg:text-xl lg:leading-[30px] mt-4 lg:mt-6">
                            {quote2}
                        </p> : ""}
                    </div>
                    <img className="pt-[16px] w-5/6 lg:w-auto mx-auto lg:pt-[58px] lg:pr-[22px] pb-[32px]" src={img} alt="" />
                </div>
            </div>
        </>
    );
};

export default OurTeamBanner;