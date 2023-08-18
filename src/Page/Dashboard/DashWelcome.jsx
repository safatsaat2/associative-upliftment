import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DashWelcome = () => {
    const {user} = useContext(AuthContext)
    const name = user.displayName;
    console.log(name)
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl lg:text-6xl">Welcome to Dashboard</h1>
            <p className="text-lg lg:text-4xl mt-3 lg:mt-6">{name}</p>
        </div>
    );
};

export default DashWelcome;