import { Link } from "react-router-dom";
import CartIcon from "../../assets/icons/Cart";
import { useCart } from "../../utils/CartContext";

export const HeaderCartIcon = () => {
  const { cartItems, setIsDrawerOpen } = useCart();

  return (
    <Link onClick={() => setIsDrawerOpen(true)}>
       <CartIcon /><span className="cart-count">{cartItems.length}</span>
    </Link>
  );
};