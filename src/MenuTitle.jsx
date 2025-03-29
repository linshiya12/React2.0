import MenuItems from "./MenuItems";

function MenuTitle(props) {
    const { titledata } = props;
    return (
      <div>
        <h2 style={{ marginBottom: "0px", marginLeft: "5px", fontWeight: "600" }}>
          {titledata?.card?.card?.title}
        </h2>
        <div className="menu" style={{ marginTop: "8px" }}>
          {titledata?.card?.card?.itemCards?.map((item) => (
            <MenuItems key={item?.card?.info?.id} itemData={item} />
          ))}
        </div>
      </div>
    );
  }

  export default MenuTitle