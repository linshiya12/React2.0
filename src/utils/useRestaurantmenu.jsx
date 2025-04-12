import { MenuApi,MenuEnd } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantmenu=(menuId)=>{
    const [restMenu,setrestMenu]=useState(null)
    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata=async()=>{
        const data=await fetch(MenuApi+menuId)
        const json=await data.json();
        setrestMenu(json.data)
    }
    return(restMenu);
}

export default useRestaurantmenu