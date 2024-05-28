"use client";

import { ScissorsIcon } from "@heroicons/react/16/solid";
import Cart from "./components/Cart";
import Serch from "./components/Serch";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { increment } from "@/redux/sliceCart";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <nav className="flex w-screen h-16 bg-zinc-800 justify-around items-center">
      <ScissorsIcon
        width="40px"
        height="40px"
        style={{ cursor: "pointer" }}
        onClick={() => {
          dispatch(increment());
          router.push("/");
        }}
      />
      <ul className="flex gap-8">
        <li className="cursor-pointer transition-all text-zinc-100 hover:text-zinc-300 duration-500">
          Mulher
        </li>
        <li className="cursor-pointer transition-all text-zinc-100 hover:text-zinc-300 duration-500">
          Homem
        </li>
        <li className="cursor-pointer transition-all text-zinc-100 hover:text-zinc-300 duration-500">
          Outlet
        </li>
        <li className="cursor-pointer transition-all text-zinc-100 hover:text-zinc-300 duration-500">
          Populares
        </li>
      </ul>
      <div className="flex items-center gap-12">
        <Serch />
        <Cart />
      </div>
    </nav>
  );
};

export default Header;
