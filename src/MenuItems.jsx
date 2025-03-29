function MenuItems(props) {
  const { itemData } = props;
  const { name, imageId, defaultPrice, description, ratings, price } =
    itemData.card.info;
  return (
    <div className="menu-item">
      <div className="menu-details">
        <h3 style={{ marginBottom: "2px" }}>{name}</h3>
        {price ? (
          <span className="price">₹{price / 100}</span>
        ) : (
          <span className="price">₹{defaultPrice / 100}</span>
        )}
        {ratings.aggregatedRating?.rating && (
          <p style={{ color: "green" }}>
            ⭐ {ratings.aggregatedRating.rating} (
            {ratings.aggregatedRating.ratingCount})
          </p>
        )}

        <p className="para">{description}</p>
      </div>

      <div className="menu-img-container">
        {imageId?<img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
          className="menu-img"
        />:<div style={{margin:"50px"}}></div>}
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
}

export default MenuItems;
