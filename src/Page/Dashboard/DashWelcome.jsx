import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DashWelcome = () => {
    const {user} = useContext(AuthContext)
    const name = user?.displayName;
    console.log(name)
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mt-10">
                <div className="w-full h-full bg-border py-4 px-4 lg:py-10 lg:px-20">
                    <p className="font-zen text-center lg:text-[32px]">Welcome {name}</p>
                    <p className="font-zen text-center lg:text-[32px]">To</p>
                    <p className="font-zen text-center lg:text-[32px]">Associative Upliftment</p>
                </div>
                
            </div>
            {/* <div className="bg-black mt-[80px] text-white lg:w-[728px] flex flex-col justify-center items-center lg:rounded-ee-[160px] rounded-ee-[80px] rounded-ss-[80px] lg:rounded-ss-[160px] rounded-b-xl rounded-t-xl">
                    <p className='lg:text-xl text-sm font-sans text-center lg:px-[200px] lg:py-10 pt-14 px-6 mb-10'>Activate your account and Use your codes to win two of the best free services.</p>
                    <button className='bg-[#1475EA] text-white py-3 px-14 lg:py-5 lg:px-40 rounded-[10px] lg:mb-10 mb-14'>Active</button>
            </div> */}
        </div>
    );
};

export default DashWelcome;