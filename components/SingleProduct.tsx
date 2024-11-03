import { useCart } from "@/context/Context";
import Image from "next/image";

const SingleProduct = ({ prod }: { prod: any }) => {
  const { cart, setCart } = useCart();

  const handleAddToCart = () => setCart([...cart, prod]);
  const handleRemoveFromCart = () =>
    setCart(cart.filter((c) => c.id !== prod.id));

  return (
    <div className="products">
      <Image src={prod.avatar} alt={prod.name} width={100} height={100} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button className="add remove" onClick={handleRemoveFromCart}>
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
