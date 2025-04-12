import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import OfferCard from "./OfferCard";
import MenuTitle from "./MenuTitle";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "./utils/useRestaurantmenu"

function scrollOffers(direction) {
  const container = document.querySelector(".offers-wrapper");
  const scrollAmount = 200;
  container.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
}


function RestaurantMenu() {
  const {menuId}=useParams()
  const RestMenu=useRestaurantmenu(menuId)

  if (!RestMenu || !RestMenu?.cards?.[2]?.card?.card?.info) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, totalRatingsString, sla, avgRating } =
    RestMenu.cards[2].card.card.info;

  return (
    <div className="menu-container">
      <h1 className="restaurant-name">{name}</h1>
      <div className="restaurant-header">
        <p>
          ⭐ {avgRating} ({totalRatingsString})
        </p>
        <p>{costForTwoMessage}</p>
        <p>
          {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
        </p>
      </div>

      <div className="offers-container">
        <button
          className="scroll-btn left-arrow"
          onClick={() => scrollOffers("left")}
        >
          ◀
        </button>
        <div className="offers-wrapper">
          {RestMenu?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers?.map(
            (offer) => (
              <OfferCard key={offer?.info?.offerIds} offerData={offer} />
            )
          )}
        </div>
        <button
          className="scroll-btn right-arrow"
          onClick={() => scrollOffers("right")}
        >
          ▶
        </button>
      </div>

      {/* Menu Section */}
      <div>
        {RestMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (title,index) => (
            <MenuTitle key={index} titledata={title} />
          )
        )}
      </div>
    </div>
  );
}

export default RestaurantMenu;
