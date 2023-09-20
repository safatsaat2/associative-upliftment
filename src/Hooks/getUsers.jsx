import { useQuery } from "@tanstack/react-query";

const getUsers = () => {
    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch('https://associative-upliftment-server.vercel.app/users'
            );
            return res.json();
        }
    })
    console.log(users)
    return [users, refetch ,loading]
};

export default getUsers;