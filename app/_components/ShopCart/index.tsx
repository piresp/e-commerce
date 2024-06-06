"use client"

import { controllerModalShopCart, selectModalControllers } from "@/redux/sliceModals"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Item from "./components/Item"
import Resume from "./components/Resume"
import { XMarkIcon } from "@heroicons/react/16/solid"

const ShopCartModal = () => {
  const dispatch = useDispatch()
  const { modalCart } = useSelector(selectModalControllers)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && modalCart) dispatch(controllerModalShopCart());
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);

  }, [modalCart, dispatch]);

  if (!modalCart) return

  const arrayOfItems = [<Item />, <Item />, <Item />]

  return (
    <div className={`flex flex-col backdrop-blur-md z-40 w-full h-screen absolute top-0 ${modalCart ? 'opacity-100' : 'opacity-0'} transition-all delay-500`}>
      <div className="rounded-2xl bg-zinc-100 h-5/6 w-5/6 m-auto p-12 overflow-hidden">
        <div className="flex justify-between">
          <span className="text-zinc-950 text-4xl">Carrinho</span>
          <XMarkIcon className="w-8 h-8 text-zinc-400 cursor-pointer" onClick={() => dispatch(controllerModalShopCart())} />
        </div>
        <div className="flex h-full py-11 gap-16">
          <div className="overflow-scroll h-full" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            {arrayOfItems.map((item, index) => (
              <>
                <div className="border-t border-zinc-200 my-4" />
                <div key={index}>
                  {item}
                </div>
                {arrayOfItems.length === index + 1 && <div className="border-t border-zinc-200 my-4" />}
              </>
            )
            )}
          </div>
          <Resume />
        </div>
      </div>
    </div>
  )
}

export default ShopCartModal