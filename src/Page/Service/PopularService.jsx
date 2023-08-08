import { Link } from "react-router-dom";

const PopularService = () => {
    const toTop = () => {
        window.scrollTo(0, 0);
      };
    return (
        <div className="mt-20">
            <h1
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="text-2xl lg:text-[64px] font-semibold text-center leading-[135%]"
            >
                Popular Services
            </h1>
            <p
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="text-md lg:text-xl text-[#414141] leading-[145%] mt-4 mb-10 text-center"
            >
                Delivering Exceptional Solutions
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[92px] gap-y-[75px] place-items-center max-w-7xl mx-auto">
                <Link  to="/popularservice/1">
                    <img onClick={toTop} src="https://i.ibb.co/LtCNz8j/Group-1000003431-1.png" className="rounded-md" />
                </Link>
                <Link to="/popularservice/2">
                    <img src="https://i.ibb.co/HN0n25v/Group-1000003432-2.png" className="rounded-md" />
                </Link>
                <Link to="/popularservice/3">
                    <img src="https://i.ibb.co/6W6JfmM/Group-1000003433-1.png" className="rounded-md" />
                </Link>
                <Link to="/popularservice/4">
                    <img src="https://i.ibb.co/m9cCsG9/Group-1000003434-1.png" className="rounded-md" />
                </Link>
                <Link to="/popularservice/5">
                    <img src="https://i.ibb.co/BLsCxjM/Group-1000003435-1.png" className="rounded-md" />
                </Link>
                <Link to="/popularservice/6">
                    <img src="https://i.ibb.co/Y3RLvs3/Group-1000003431-2.png" className="rounded-md" />
                </Link>
                <Link to="/popularservice/7">
                    <img src="https://i.ibb.co/2nBPsF0/Group-1000003432-3.png" className="rounded-md" />
                </Link>
                <Link to="/popularservice/8">
                    <img src="https://i.ibb.co/XFLcMgr/Group-1000003433-2.png" className="rounded-md" />
                </Link>
                <Link to="/popularservice/9">
                    <img src="https://i.ibb.co/ZhMRhmk/Group-1000003434-2.png" className="rounded-md" />
                </Link>
                <Link to="/popularservice/10">
                    <img src="https://i.ibb.co/nLDRKxJ/Group-1000003435-2.png" className="rounded-md" />
                </Link>
            </div>
        </div>
    );
};

export default PopularService;