
const OurTeamBanner = ({quote1, quote2, h3, img}) => {
    return (
        <>
            <div style={{ background: "linear-gradient(90deg, #1973E3 32.81%, #000 82.2%)", WebkitBorderTopLeftRadius: "175px", WebkitBorderBottomRightRadius: "65px" }} className="max-w-[1280px] mx-auto">
                <div className="flex items-center gap-x-[46px]">
                    <div className="flex flex-col items-center pl-[63px]">
                        <h3 className="bg-white text-[#1973E3] py-[21px] px-[27px] rounded-[30px] text-[50px] font-bold leading-[74px]">
                            {h3}
                        </h3>
                        <p className="qoute1 text-center text-white text-xl leading-[30px] mt-[32px]">
                            {quote1}
                        </p>
                        {quote2 !== "" ? <p className="quote2 text-center text-white text-xl leading-[30px] mt-6">
                            {quote2}
                        </p> : ""}
                    </div>
                    <img className="pt-[58px] pr-[22px] pb-[32px]" src={img} alt="" />
                </div>
            </div>
        </>
    );
};

export default OurTeamBanner;