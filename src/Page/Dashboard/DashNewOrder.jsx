import axios from "axios";
import DashNav from "./DashNav";
import Dashboardtitle from "./Dashboardtitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DashNewOrder = () => {
    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    axios.get(`http://localhost:7000/orders/${user?.email}`)
    .then(res=>{
        const data =res.data
        setOrders(data)
    })
  return (
    <div className="lg:flex">
      <DashNav />
      <div className="w-full lg:w-3/4 bg-slate-100 ">
        <Dashboardtitle />
        <div className="my-20 mx-4">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Charge</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                 {orders.map(order => <tr key={order._id}>
                    <th>{order?.id}</th>
                    <td>{order?.date}</td>
                    <td>{order?.serviceName}</td>
                    <td>${order?.price}</td>
                    <td>{order?.status ? order?.status : "Processing"}</td>
                    <td></td>
                  </tr>)}
                  
                </tbody>
              </table>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default DashNewOrder;
