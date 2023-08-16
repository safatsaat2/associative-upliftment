import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DashOrders = () => {

    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    axios.get(`https://associative-upliftment-server.vercel.app/orders/${user?.email}`)
        .then(res => {
            const data = res.data
            setOrders(data)
        })
    return (

        <div className="my-20 mx-4">
            <div className="flex">
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] px-4 py-2 text-white">All</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] px-4 py-2 text-white">Pending</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] px-4 py-2 text-white">Progress</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] px-4 py-2 text-white">Complete</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] px-4 py-2 text-white">Partial</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] px-4 py-2 text-white">Processing</div>
                <div className="bg-[#1C7EAD] rounded-xl ml-[30px] px-4 py-2 text-white">Canceled</div>
            </div>
            <div className="overflow-x-auto mt-10 rounded-[30px]">
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
                        {/* {orders.map(order => )} */}
                        <tr className="bg-white font-red ">
                            <th>hi</th>
                            <td>hi</td>
                            <td>hi</td>
                            <td>hi</td>
                            <td>hi</td>
                            <td>hi</td>
                            <td>hi</td>
                            <td>hi</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default DashOrders;