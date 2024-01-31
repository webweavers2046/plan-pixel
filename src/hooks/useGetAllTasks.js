// This hook recurrently fetch following the each drop
"use client"

import apiConnector from "./useAxios";
import { useEffect, useState } from "react";

const useGetAllTasks = () => {
  const [alltasks, setAllTasks] = useState([]);
  const xios = apiConnector();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await xios.get("/tasks");
        setAllTasks(response.data);
      } catch (error) {
        // Handling error 
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
    // when droppable area gets changed this hook gets triggered again
  }, [xios]); 

  return {alltasks};
};

export default useGetAllTasks;

// This hook recurrently fetch following the each drop
// useGetAllTasks.js

// import apiConnector from './useAxios';
// import { useQuery } from '@tanstack/react-query';

// const useGetAllTasks = (endpoint, key) => {
//   const xios = apiConnector();

//   const { data, ...rest } = useQuery({
//     queryKey: [key],
//     queryFn: async () => {
//       const response = await xios.get(endpoint);
//       return response.data;
//     },
//   });

//   return { data: data || [], ...rest };
// };

// export default useGetAllTasks;
