import CartIcon from "../../assets/icons/Cart";
import { useCart } from "../../utils/CartContext";

export const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <button onClick={() => addToCart(product)}><CartIcon/></button>
    </div>
  );
};

