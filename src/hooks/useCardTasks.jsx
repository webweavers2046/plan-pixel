import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useSingleWorkspace from "./useSingleWorkspace";

const useCardTasks = (cardId) => {

    const axiosPublic = useAxios();
    
    
    // const workSpaceData = useSingleWorkspace(workSpaceId);
    // const workSpace =
    // {
    //     _id: "1234",
    //     members: [
    //         {
    //             name: "Al-amin Rahim",
    //             email: "alamin102410@gmail.com"
    //         },
    //         {
    //             name: "Sajid Khan",
    //             email: "sajid@gmail.com"
    //         },
    //         {
    //             name: "Sami Uddin",
    //             email: "sami@gmail.com"
    //         },
    //     ],
    //     cards: [
    //         {
    //             _id: "12345",
    //             cardName: "Card Name",
    //             description: "A user flow is a visualization of a path that a user takes through a website"
    //         },
    //         {
    //             _id: "123456",
    //             cardName: "Card Name 2",
    //             description: "A user flow is a visualization of a path that a user takes through a website"
    //         },
    //     ],
    // }


    // const workSpaceMembers = workSpace?.members;
    // const workSpaceCards = workSpace?.cards;




    const {data, refetch, isLoading, isPending} = useQuery({
        queryKey: ['cards',cardId],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/cards/${cardId}`)
           return await data.data;
        }
    })
    

    return {data, refetch, isLoading, isPending};

    // const cardTasks = [
    //     {
    //         _id: "xyz",
    //         cardId: "12345",
    //         taskMember: "Al-amin Rahim",
    //         email: "alamin102410@gmail.com",
    //         task: "Calender Feature Implement",
    //         checked: true,
    //     },
    //     {
    //         _id: "ddde",
    //         cardId: "12345",
    //         taskMember: "Sami Uddin",
    //         email: "sami@gmail.com",
    //         task: "Calender Feature Implement",
    //         checked: false,
    //     },
    //     {
    //         _id: "ddsj",
    //         cardId: "12346",
    //         taskMember: "Al-amin Rahim",
    //         email: "alamin102410@gmail.com",
    //         task: "Calender Feature Implement",
    //         checked: true,
    //     },
    // ]

    

   



};

export default useCardTasks;