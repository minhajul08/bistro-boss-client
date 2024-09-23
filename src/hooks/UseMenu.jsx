// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseMenu = () => {
    const axiosPublic = UseAxiosPublic ();
    const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/menu');
            return res.data
        }
    })
    // const [menu, setMenu] = useState([]);
    // const [loading,setLoading] = useState (true);
    // useEffect(() => {
    //     fetch('https://bistro-boss-resturent.vercel.app/menu')
    //         .then(res => res.json())
    //         .then (data => {
    //             setMenu (data)
    //             setLoading (false);
    //         })
    // }, [])
    return [menu,loading, refetch];
}


export default UseMenu;