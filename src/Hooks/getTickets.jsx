import { useQuery } from "@tanstack/react-query";



const getTickets = () => {
    const { data: tickets = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["tickets"],
        queryFn: async () => {
            const res = await fetch('https://associative-upliftment-server.vercel.app/tickets'
            );
            return res.json();
        }
    })
    return [tickets, refetch ,loading]
};

export default getTickets;