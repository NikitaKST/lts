import PropTypes from "prop-types";

export default function ShopItem(props) {
  const titleButton = "add to cart";
  const {item} = props;

  return (
    <div className="product-item">
      <div className="products-list-item-img__wrap">
        <img src={item.img} alt={item.name} className="card-image"/>
      </div>
      <h3 className="card-title">{item.name}</h3>
      <span className="product-color">{item.color}</span>

      <span className="card-price">{"$" + item.price}</span>
      <button className="add-to-cart__btn">{titleButton}</button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};