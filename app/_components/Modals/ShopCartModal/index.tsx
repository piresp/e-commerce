"use client";

import useEscapeKeyHandler from "@/app/_hooks/useEscapeKeyHandler";
import {
  controllerModalShopCart,
  selectModalControllers,
} from "@/redux/sliceModals";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import Item from "./components/Item";
import Resume from "./components/Resume";
import { selectCartSlice } from "@/redux/sliceCart";

const ShopCartModal = () => {
  const dispatch = useDispatch();
  const { modalCart } = useSelector(selectModalControllers);
  const { items } = useSelector(selectCartSlice);

  useEscapeKeyHandler(
    "Escape",
    () => dispatch(controllerModalShopCart()),
    modalCart
  );

  if (!modalCart) return;

  return (
    <div
      className={`flex flex-col backdrop-blur-md z-40 w-full h-screen absolute top-0 ${
        modalCart ? "opacity-100" : "opacity-0"
      } transition-all delay-500`}
    >
      <div className="rounded-2xl bg-zinc-100 h-5/6 w-5/6 m-auto p-12 overflow-hidden">
        <div className="flex justify-between">
          <span className="text-zinc-950 text-4xl">Carrinho</span>
          <XMarkIcon
            className="w-8 h-8 text-zinc-400 cursor-pointer"
            onClick={() => dispatch(controllerModalShopCart())}
          />
        </div>
        <div className="flex h-full py-11 gap-16 lg:flex-row md:flex-col sm:flex-col items-center">
          <div
            className="overflow-scroll h-full w-full"
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {items.map((item, index) => (
              <>
                <div className="border-t border-zinc-200 my-4" />
                <Item {...item} />
                {items.length === index + 1 && (
                  <div className="border-t border-zinc-200 my-4" />
                )}
              </>
            ))}
          </div>
          <Resume />
        </div>
      </div>
    </div>
  );
};

export default ShopCartModal;
