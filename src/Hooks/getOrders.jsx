import { useQuery } from "@tanstack/react-query";

const getOrders = () => {
    const { data: orders = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const res = await fetch('https://associative-upliftment-server.vercel.app/orders'
            );
            return res.json();
        }
    })
    console.log(orders)
    return [orders, refetch ,loading]
};

export default getOrders;