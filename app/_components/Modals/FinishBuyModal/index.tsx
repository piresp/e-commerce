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
    'Escape',
    () => dispatch(controllerModalFinishBuy()),
    modalFinishPurchase
  );

  if (!modalFinishPurchase) return;

  return (
    <div
      className={`flex flex-col backdrop-blur-md z-40 w-full h-screen absolute top-0 ${modalFinishPurchase ? "opacity-100" : "opacity-0"
        } transition-all delay-500`}
    >
      <div className="rounded-2xl bg-zinc-100 h-5/6 w-5/6 m-auto p-12 overflow-hidden">
        <span className="text-zinc-950 text-4xl">Pagamento</span>
        <div className="flex w-full gap-2 mt-8">
          <div className="flex-1 bg-zinc-200 hover:bg-zinc-300 transition-all duration-500 h-11 text-center content-center rounded-md cursor-pointer"><span className="text-black">Pix</span></div>
          <div className="flex-1 bg-zinc-200 hover:bg-zinc-300 transition-all duration-500 h-11 text-center content-center rounded-md cursor-pointer"><span className="text-black">Cartão de Crédito</span></div>
          <div className="flex-1 bg-zinc-200 hover:bg-zinc-300 transition-all duration-500 h-11 text-center content-center rounded-md cursor-pointer"><span className="text-black">Boleto</span></div>
        </div>
      </div>
    </div>
  );
};

export default FinishBuyModal;
