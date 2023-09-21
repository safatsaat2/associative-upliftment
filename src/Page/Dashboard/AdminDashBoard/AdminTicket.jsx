import getTickets from "../../../Hooks/getTickets";

const AdminTicket = () => {
    const [tickets] = getTickets()

    console.log(tickets)
    return (
        <div className="my-20 mx-4 h-screen">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Subject</th>
                                    <th>Message</th>
                                    <th>Transaction Id</th>
                                    <th>Image</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map(ticket => <tr key={ticket._id}>
                                    <th>{ticket?._id}</th>
                                    <th>{ticket?.subject}</th>
                                    <td>{ticket?.message}</td>
                                    <td>{ticket?.transaction}</td>
                                    <td><a target="blank" href={ticket?.image}>Image Link</a></td>
                                    
                                </tr>)}

                            </tbody>
                        </table>
                    </div>

        </div>
    );
};

export default AdminTicket;