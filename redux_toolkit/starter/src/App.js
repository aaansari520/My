import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartContainer from "./features/cart/CartContainer";
import { calTotal, getCartItems } from "./features/cart/createSlice";
import Navbar from "./features/cart/Navbar";
import Modal from "./features/modal/Modal";
import ModalSlice from "./features/modal/modalSlice";

function App() {
  // const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const { cartItems, isLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calTotal());
  }, [cartItems]);

  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}
export default App;
