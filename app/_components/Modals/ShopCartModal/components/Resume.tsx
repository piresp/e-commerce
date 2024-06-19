import { selectCartSlice } from "@/redux/sliceCart";
import {
  controllerModalFinishBuy,
  controllerModalShopCart,
} from "@/redux/sliceModals";
import { currentUser } from "@clerk/nextjs/server";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Resume = () => {
  const { total, totalFormatted } = useSelector(selectCartSlice);

  return (
    <div className="flex flex-col h-[360px] w-[470px] bg-zinc-200 bg-opacity-40 rounded-2xl p-8 gap-5">
      <h2 className="text-zinc-900 font-semibold text-lg">Resume</h2>
      <div className="flex justify-between mt-4">
        <span className="text-zinc-600 text-base">Total:</span>
        <span className="text-zinc-800 text-base">R$ 00,00</span>
      </div>
      <div className="border-t border-zinc-200" />
      <div className="flex justify-between">
        <span className="text-zinc-600 text-base">Frete:</span>
        <span className="text-zinc-800 text-base">R$ 00,00</span>
      </div>
      <div className="border-t border-zinc-200" />
      <div className="flex justify-between">
        <span className="text-zinc-600 text-base">Total do Pedido:</span>
        <span className="text-zinc-800 text-base">{totalFormatted}</span>
      </div>
      {buttonFinalizePurchase()}
    </div>
  );
};

export default Resume;

const buttonFinalizePurchase = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <>
      <SignedIn>
        <button
          className="btn btn-info mt-auto text-zinc-100"
          onClick={() => {
            dispatch(controllerModalFinishBuy());
            dispatch(controllerModalShopCart());
          }}
        >
          Comprar
        </button>
      </SignedIn>
      <SignedOut>
        <button
          className="btn btn-info mt-auto text-zinc-100"
          onClick={() => {
            router.push("/sign-in");
            dispatch(controllerModalShopCart());
          }}
        >
          Logar
        </button>
      </SignedOut>
    </>
  );
};
