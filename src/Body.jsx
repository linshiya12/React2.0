// import restObj from "./utils/mock";
import { CDN_URL } from "./utils/constants";
import { useState,useEffect} from "react";
import Shimmer from "./shimmer.jsx"
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

function RestaurentCard(props){
    const {resData}=props;
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        locality,
        costForTwo
    }=resData?.info;
    return(
        <div className="res-card">
            <div className="image-container">
                <img className="card-img" src={CDN_URL+cloudinaryImageId} alt="card-imag" />
                <span className="price-tag">{costForTwo}</span>
            </div>
            <h4 style={{marginLeft:"5px"}}>{name}</h4>
            <ul style={{marginLeft:"5px"}}>
            <li className="nodot">{avgRating}⭐</li>
            <li >{resData.info.sla.deliveryTime}mins</li>
            </ul>
            <p className="cuisines-text">{cuisines.join(",")}</p>
            <p style={{marginLeft:"5px"}} >{locality}</p>

        </div>
    );
}

function Body(){
    const [FiltObj,setFiltObj]=useState([])
    const [SearchFilt,setSearchFilt]=useState([]);


    const[SearchText,setSearchText]=useState([])

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata=async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFiltObj(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setSearchFilt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    
    const onlinestatus=useOnlineStatus();
    if (onlinestatus==false) return(<h1>you are offline,check internet connection</h1>)
    
    return FiltObj.length===0?<Shimmer/>:(
        <div className="body">
            <div className="container">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                setSearchFilt(FiltObj.filter((data)=>data.info.avgRating>= 4.5));
                }}>Top Rated Restaurants</button>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." className="(search-input" value={SearchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="search-btn"
                onClick={()=>{const searchFilter=FiltObj.filter((data)=>data.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                    setSearchFilt(searchFilter)
                }} >
                    🔍</button>
            </div>
        </div>

            <div className="res-container">
                {
                SearchFilt.map((restaurant) =>(<Link style={{textDecoration:"none",color:"black"}} key={restaurant.info.id} to={"/menu/"+restaurant.info.id}><RestaurentCard resData={restaurant}/></Link>))}
            </div>
        </div>
    );
}

export default Body