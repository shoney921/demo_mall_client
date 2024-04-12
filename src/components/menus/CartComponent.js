import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin";
import { getCartItemsAsync } from "../../slices/cartSlice";

export default function CartComponent() {
  const { isLogin, loginState } = useCustomLogin();

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartSlice);

  useEffect(() => {
    if (isLogin) {
      dispatch(getCartItemsAsync());
    }
  }, [isLogin]);

  return (
    <div className="w-full">
      {isLogin && (
        <div className="flex">
          <div>{loginState.nickname}의 장바구니</div>
          <div className="bg-orange-600 w-9 text-white m-2 text-center rounded-full">
            {cartItems.length}
          </div>
        </div>
      )}
      <div> Cart </div>
    </div>
  );
}
