import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import getUsers from "../../../Hooks/getUsers";

const AdminUserList = () => {

    const [users] = getUsers()

    // const [users, setUser] = useState([])
    // useEffect(()=>{
    //     axios.get(`https://associative-upliftment-server.vercel.app/users`)
    //     .then(res => {
    //         const data = res.data
    //         setUser(data)
    //     })
    // }, [])
    return (
        <div className="my-20 mx-4 h-screen">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => <tr key={user._id}>
                                    <th>{user?._id}</th>
                                    <th>{user?.name}</th>
                                    <td>{user?.number}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.type}</td>
                                    
                                </tr>)}

                            </tbody>
                        </table>
                    </div>

        </div>
    );
};

export default AdminUserList;