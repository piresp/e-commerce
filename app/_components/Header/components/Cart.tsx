import { controllerModalShopCart } from "@/redux/sliceModals";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch()

  return (
    <div
      className="flex gap-2 cursor-pointer"
      onClick={() => dispatch(controllerModalShopCart())}
    >
      <ShoppingBagIcon
        height="24px"
        width="24px"
        color="#fff"
        className="hover:text-zinc-300 duration-500"
      />
      <span className="hover:text-zinc-300 duration-500">0</span>
    </div>
  );
};

export default Cart;
