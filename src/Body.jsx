// import restObj from "./utils/mock";
import { CDN_URL } from "./utils/constants";
import { useState } from "react";
import restObj from "./utils/mock";

function RestaurentCard(props){
    const {resData}=props;
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        locality
    }=resData?.info;
    return(
        <div className="res-card">
            <img className="card-img" src={CDN_URL+cloudinaryImageId} alt="card-imag" />
            <h4 style={{marginLeft:"5px"}}>{name}</h4>
            <ul style={{marginLeft:"5px"}}>
            <li className="nodot">{avgRating}⭐</li>
            <li >{resData.info.sla.deliveryTime}mins</li>
            </ul>
            <p style={{marginLeft:"5px"}} >{cuisines.join(",")}</p>
            <p style={{marginLeft:"5px"}} >{locality}</p>

        </div>
    );
}

function Body(){
    const [FiltObj,setFiltObj]=useState(restObj)
    return(
        <div className="body">
            <div className="container">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    setFiltObj(restObj.filter((data)=>data.info.avgRating>4.3));
                }}>Top Rated Restaurants</button>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-btn">🔍</button>
            </div>
        </div>

            <div className="res-container">
                {
                FiltObj.map((restaurant) =>(<RestaurentCard key={restaurant.info.id} resData={restaurant}/>))}
            </div>
        </div>
    );
}

export default Body