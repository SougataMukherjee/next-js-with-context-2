import { useCart } from "@/context/Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const { products } = useCart();

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map((prod: any) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
