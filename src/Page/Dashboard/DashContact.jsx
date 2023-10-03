import { Link } from "react-router-dom";

const DashContact = () => {
    return (
        <div className="max-w-[470px] bg-white mx-auto flex flex-col gap-[24px] items-center justify-center shadow-2xl py-[87px] rounded-[12px]">
            <Link to="https://wa.me/+8801329648992">
                <div className="w-[370px] cursor-pointer h-[60px] border border-[#1973E3] flex items-center justify-center rounded-[30px]">
                    <p className="text-lg text-center">Support 1</p>
                </div>
            </Link>

            <Link to="https://wa.me/+8801329648992">
            <div className="w-[370px] cursor-pointer h-[60px] border border-[#1973E3] flex items-center justify-center rounded-[30px]">
                <p className="text-lg text-center">Support 2</p>
            </div>
            </Link>
            <Link to="https://wa.me/+8801329648992">
            <div className="w-[370px] cursor-pointer h-[60px] border border-[#1973E3] flex items-center justify-center rounded-[30px]">
                <p className="text-lg text-center">Support 3</p>
            </div>
            </Link>
            <Link to="https://wa.me/+8801329648992">
            <div className="w-[370px] cursor-pointer h-[60px] border border-[#1973E3] flex items-center justify-center rounded-[30px]">
                <p className="text-lg text-center">Support 4</p>
            </div>
            </Link>
            <Link to="https://wa.me/+8801329648992">
            <div className="w-[370px] cursor-pointer h-[60px] border border-[#1973E3] flex items-center justify-center rounded-[30px]">
                <p className="text-lg text-center">Support 5</p>
            </div>
            </Link>
        </div>
    );
};

export default DashContact;