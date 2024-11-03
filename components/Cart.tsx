import { useEffect, useState } from "react";
import { useCart } from "@/context/Context";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const { cart } = useCart();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(cart.reduce((acc: any, curr: any) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: ₹{total}</span>
      <div className="productContainer">
        {cart.map((prod: any) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
