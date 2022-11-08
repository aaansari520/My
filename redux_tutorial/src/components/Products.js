import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/productSlice";

const url = "http://fakestoreapi.com/products";

const Products = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((store) => store.product);
  const cart = useSelector((store) => store.cart);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   console.log("data", data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, [dispatch]);

  const handleAdd = (item) => {
    dispatch(add(item));
  };
  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  if (status === STATUSES.LOADING) {
    return <h1>{STATUSES.LOADING}</h1>;
  }
  if (status === STATUSES.ERROR) {
    return <h1>{STATUSES.ERROR}</h1>;
  }

  return (
    <div className="productsWrapper">
      {products.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <div className="special">
              {cart.includes(item) ? (
                <button onClick={() => handleRemove(item.id)} className="btn">
                  REMOVE FROM CART
                </button>
              ) : (
                <button onClick={() => handleAdd(item)} className="btn">
                  ADD TO CART
                </button>
              )}

              <h5>${item.price}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
