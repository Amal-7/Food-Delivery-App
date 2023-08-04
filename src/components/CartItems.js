import { Menu_img_cdn } from "../config";

const CartItems = ({
    name,
    price,
    category,
    description,
    imageId
}) => {
  return (
    <div className="menu">
      <div  className="menu-card">
        <div style={{ width: "70%" }}>
          <h2 style={{ paddingLeft: "1rem" }}>{name}</h2>
          <h3>{price / 100}</h3>
          <h3>{category}</h3>
          <h3>{description}</h3>
        </div>
        <div className="menu-img">
          <img src={Menu_img_cdn + imageId} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CartItems