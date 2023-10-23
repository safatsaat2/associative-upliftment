
const StrategyMiddleBanner = ({image, title, description}) => {
    return (
        <>
            <div className="flex lg:flex-row flex-col gap-y-10 items-start gap-x-[16px] mx-2">
                <img className="drop-shadow-2xl" src={image} alt="" />
                <div>
                    <h3 className="text-[22px] text-center lg:text-left lg:text-4xl">{title}</h3>
                    <p className="text-[12px] lg:text-2xl mt-4">{description}</p>
                </div>
            </div>
        </>
    );
};

export default StrategyMiddleBanner;