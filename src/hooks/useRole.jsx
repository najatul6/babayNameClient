import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const {data: dbUser,isPending} = useQuery({
      queryKey: [user?.email, "dbUser"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/users/${user?.email}`);
        return res.data.role;
      },
    });
    return [dbUser,isPending];
}

export default useRole