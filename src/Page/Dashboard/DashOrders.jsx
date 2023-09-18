import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useEffect } from "react";

const DashOrders = () => {

    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    console.log(orders)

    useEffect(()=>{
        axios.get(`https://associative-upliftment-server.vercel.app/orders/${user?.email}`)
        .then(res => {
            const data = res.data;
            setOrders(data)
        })
    },[user])
    return (
        <div className="my-5 lg:my-20 lg:mx-4 h-screen">
            <div className="lg:flex grid grid-cols-2 gap-y-2">
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] py-1 text-center lg:px-4 lg:py-2 text-white">All</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] py-1 text-center lg:px-4 lg:py-2 text-white">Pending</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] py-1 text-center lg:px-4 lg:py-2 text-white">Progress</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] py-1 text-center lg:px-4 lg:py-2 text-white">Complete</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] py-1 text-center lg:px-4 lg:py-2 text-white">Partial</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] py-1 text-center lg:px-4 lg:py-2 text-white">Processing</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] py-1 text-center lg:px-4 lg:py-2 text-white">Canceled</div>
            </div>
            <div className="overflow-x-auto mt-10 rounded-lg lg:rounded-[30px]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white font-red bg-[#1C7EAD]">
                            <th>Id</th>
                            <th>Date</th>
                            <th>Information</th>
                            <th>Charge</th>
                            <th>Quantity</th>
                            <th>Service</th>
                            <th>Status</th>
                            <th>Remains</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <tr className="bg-white font-red ">
                            <th>{order?._id}</th>
                            <td>{order?.date}</td>
                            <td>{order?.infor}</td>
                            <td>${order?.charge}</td>
                            <td>{order?.quantity}</td>
                            <td>{order?.selectedSer?.name}</td>
                            <td>{order?.status}</td>
                            <td>NONE</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default DashOrders;