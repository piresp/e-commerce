"use client";

import useEscapeKeyHandler from "@/app/_hooks/useEscapeKeyHandler";
import {
  controllerModalFinishBuy,
  selectModalControllers,
} from "@/redux/sliceModals";
import { useDispatch, useSelector } from "react-redux";

const FinishBuyModal = () => {
  const { modalFinishPurchase } = useSelector(selectModalControllers);
  const dispatch = useDispatch();

  useEscapeKeyHandler(
    () => dispatch(controllerModalFinishBuy()),
    modalFinishPurchase
  );

  if (!modalFinishPurchase) return;

  return (
    <div
      className={`flex flex-col backdrop-blur-md z-40 w-full h-screen absolute top-0 ${
        modalFinishPurchase ? "opacity-100" : "opacity-0"
      } transition-all delay-500`}
    >
      <div className="rounded-2xl bg-zinc-100 h-5/6 w-5/6 m-auto p-12 overflow-hidden"></div>
    </div>
  );
};

export default FinishBuyModal;
