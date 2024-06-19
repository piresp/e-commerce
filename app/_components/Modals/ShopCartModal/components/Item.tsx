import { XMarkIcon } from "@heroicons/react/16/solid";
import { PlusIcon } from "@heroicons/react/16/solid";
import { MinusIcon } from "@heroicons/react/16/solid";
import { ClothesItem } from "@/redux/sliceClothes";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
} from "@/redux/sliceCart";
const Item = ({ ...props }: ClothesItem) => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full h-56 content-center gap-3 grid grid-cols-4"
      key={props.id}
    >
      <img
        src={props.img}
        className="w-48 h-48 object-cover rounded-2xl self-center col-start-1"
      />
      <div className="ml-2 w-full py-5 self-center flex flex-col col-start-2">
        <span className="text-zinc-950 text-xl">{props.title}</span>
        <span className="text-zinc-500 text-base">{props.subtitle}</span>
        <span className="text-zinc-950 text-base">{props.price}</span>
      </div>
      <div className="w-full self-center col-start-3">
        <div className="flex self-center gap-3 place-content-center">
          <MinusIcon
            className="w-3 h-3 text-zinc-400 cursor-pointer self-center"
            onClick={() => dispatch(decreaseItemQuantity(props.id))}
          />
          <span className="text-zinc-950">{props.quantity}</span>
          <PlusIcon
            className="w-3 h-3 text-zinc-400 cursor-pointer self-center"
            onClick={() => dispatch(increaseItemQuantity(props.id))}
          />
        </div>
      </div>
      <div className="mt-2 mr-2 col-start-4 flex flex-row-reverse">
        <XMarkIcon
          className="w-6 h-6 text-zinc-400 cursor-pointer"
          onClick={() => dispatch(removeFromCart(props.id))}
        />
      </div>
    </div>
  );
};

export default Item;
