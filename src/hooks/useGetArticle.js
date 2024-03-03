import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const useGetArticle = () => {
    const axiosAdmin = useAxios();
    const {
        data = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["articles"],
        queryFn: async () => {
            const response = await axiosAdmin.get(`/api/articles`);
            return response.data;
        },
    });
    return { data, isLoading, refetch };
};
export default useGetArticle;