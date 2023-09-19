import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AdminOrderPage = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get(`https://associative-upliftment-server.vercel.app/orders`)
            .then(res => {
                const data = res.data
                setOrders(data)
            })
    }, [])

    const acceptHandler = (id) =>{
        axios.patch(`http://localhost:7000/orders/accept/${id}`)
        .then(res => {
            if(res.data.modifiedCount){
                Swal.fire(`This Service is Approved`)
            }
        })
    }
    const deleteHandler = (id) =>{
        axios.patch(`http://localhost:7000/orders/delete/${id}`)
        .then(res => {
            if(res.data.modifiedCount){
                Swal.fire(`This Service is Declined`)
            }
        })
    }
    console.log(orders)
    return (
        <div className="my-20 mx-4 h-screen">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>User email</th>
                            <th>Date</th>
                            <th>Service</th>
                            <th>Charge</th>
                            <th>Status</th>
                            <th>Accept</th>
                            <th>Decline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <tr key={order._id}>
                            <th>{order?._id}</th>
                            <th>{order?.email}</th>
                            <td>{order?.date}</td>
                            <td>{order?.selectedSer?.name}</td>
                            <td>${order?.charge}</td>
                            <td>{order?.status}</td>
                            {
                                order?.status === "Pending"
                                    ?
                                    <>
                                        <td>
                                            <button onClick={() => acceptHandler(order._id)} className="cursor-pointer rounded-md text-white bg-[#3186EC] px-2 py-2">Accept</button>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteHandler(order._id)}  className="cursor-pointer rounded-md text-white bg-[#3186EC] px-2 py-2">Decline</button>
                                        </td>
                                    </>
                                    :
                                    order?.status === "Approved"
                                        ?
                                        <>
                                            <td>
                                                ✅
                                            </td>
                                            <td>
                                                ❌
                                            </td>
                                        </>
                                        :
                                        <>
                                            <td>
                                            ❌
                                            </td>
                                            <td>
                                            ✅
                                            </td>
                                        </>

                            }
                        </tr>)}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AdminOrderPage;