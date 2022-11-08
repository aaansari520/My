import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";

const Home = () => {
  const { products } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // history.push("/cart");
  };

  return (
    <div className="home-container">
      <>
        <h2>New Arrivals</h2>
        <div className="products">
          {products?.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.Name}</h3>
              <span>QTY Available:{product.qty}</span>
              {product.qty === 0 ? (
                <span style={{ color: "red" }}>Sold</span>
              ) : (
                <span style={{ color: "green" }}>Available</span>
              )}
              <img src={product.image} alt={product.Name} />
              <div className="details">
                <span>{product.desc}</span>
                <span className="price">${product.price}</span>
              </div>
              <button onClick={() => handleAddToCart(product)}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Home;
