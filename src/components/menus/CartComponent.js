import React, { useEffect } from "react";
import useCustomCart from "../../hooks/useCustomCart";
import useCustomLogin from "../../hooks/useCustomLogin";
import CartItemComponent from "../cart/CartItemComponent";

export default function CartComponent() {
  const { isLogin, loginState } = useCustomLogin();

  const { refreshCart, cartItems, changeCart } = useCustomCart();

  useEffect(() => {
    if (isLogin) {
      refreshCart();
    }
  }, [isLogin]);

  return (
    <div className="w-full">
      {isLogin && (
        <div className="flex flex-row items-center ">
          <div className="text-1xl">{loginState.nickname}의 장바구니</div>
          <div className="bg-orange-600 w-9 text-white m-2 text-center rounded-full">
            {cartItems.length}
          </div>
        </div>
      )}
      <div>
        <ul>
          {cartItems.map((item) => (
            <li>
              <CartItemComponent
                {...item}
                key={item.cino}
                changeCart={changeCart}
                memberId={loginState.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
