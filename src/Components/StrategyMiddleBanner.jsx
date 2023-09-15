
const StrategyMiddleBanner = ({image, title, description}) => {
    return (
        <>
            <div className="flex items-start gap-x-[16px]">
                <img className="drop-shadow-2xl" src={image} alt="" />
                <div>
                    <h3 className="text-4xl">{title}</h3>
                    <p className="text-2xl mt-4">{description}</p>
                </div>
            </div>
        </>
    );
};

export default StrategyMiddleBanner;