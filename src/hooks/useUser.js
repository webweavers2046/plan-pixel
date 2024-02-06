import { useEffect, useState } from "react";
import useAxios from "./useAxios";


const useUser = (email) => {
    const xios = useAxios();
    const [user = [], setUser] = useState([]);

    useEffect(() => {
        xios.get(`/users/${email}`).then((data) => setUser(data.data));
    }, []);

    return user;
};

export default useUser;