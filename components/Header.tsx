import Link from "next/link";
import { useCart } from "@/context/Context";
import "./styles.css";

const Header = () => {
  const { cart } = useCart();

  return (
    <div>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li className="prod">
          <Link href="/">Home Page</Link>
        </li>
        <li className="prod1">
          <Link href="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
