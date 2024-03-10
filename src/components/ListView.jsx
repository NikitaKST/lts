import ShopItem from "./ShopItem";
import PropTypes from 'prop-types';

const ListView = (props) => {
    <ul className="products-module">
      {props.products.map((product) => {
        return (
          <li key={uniqid()} className="products-list-item">
            <ShopCard item={product}/>
          </li>
        );
      })}
    </ul>
  }
  
  ListView.propTypes = {
    products: PropTypes.array.isRequired,
  }

  export default ListView;