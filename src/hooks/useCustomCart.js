import { useDispatch, useSelector } from "react-redux";
import { getCartItemsAsync, postChangeCartAcync } from "../slices/cartSlice";

const useCustomCart = () => {
  const cartItems = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();

  const refreshCart = () => {
    dispatch(getCartItemsAsync());
  };

  const changeCart = (param) => {
    dispatch(postChangeCartAcync(param));
  };

  return { cartItems, refreshCart, changeCart };
};

export default useCustomCart;
