import { useQuery } from "@tanstack/react-query";



const getTickets = () => {
    const { data: tickets = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["tickets"],
        queryFn: async () => {
            const res = await fetch('http://localhost:7000/tickets'
            );
            return res.json();
        }
    })
    return [tickets, refetch ,loading]
};

export default getTickets;