import PropTypes from "prop-types";

export default function ShopCard(props) {
  const titleButton = "Add to cart";
  const {item} = props;

  return (
    <div className="card-container">
      <header className="card-container-header">
        <h3 className="card-title">{item.name}</h3>
        <span className="product-color">{item.color}</span>
      </header>
      <main className="card-content">
        <div className="card-img__wrap">
          <img className="card-image" src={item.img} alt={item.name}/>
        </div>
      </main>
      <footer className="card-footer">
        <span className="card-price">{"$" + item.price}</span>
        <button className="add-to-cart__btn">{titleButton}</button>
      </footer>
    </div>
  );
}

ShopCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};