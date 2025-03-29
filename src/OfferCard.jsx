function OfferCard(props){

    const {offerData}=props;
    const {header,couponCode,offerLogo}=offerData?.info;

    return(
 
        <div className="offer-box">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${offerLogo}`} alt="Offer" className="offer-img" />
            <div className="offercontent">
                <p>{header}</p>
            </div>
        </div>
    );
}

export default OfferCard