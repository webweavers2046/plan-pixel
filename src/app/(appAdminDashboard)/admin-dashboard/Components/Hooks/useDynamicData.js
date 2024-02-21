const { default: useAxios } = require("@/hooks/useAxios");
const { useQuery } = require("@tanstack/react-query");

const useDynamicData = (queryKey, url) => {
    const axiosAdmin = useAxios();
    const { data, refetch } = useQuery({
        queryKey: [queryKey],
        queryFn: async () => {
            const response = await axiosAdmin.get(url);
            return response.data;
        },
    });
    return { data, refetch };
};
export default useDynamicData;
