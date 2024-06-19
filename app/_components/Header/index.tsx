"use client";

import { ScissorsIcon } from "@heroicons/react/16/solid";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/16/solid";
import Cart from "./components/Cart";
import Serch from "./components/Serch";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearFilter } from "@/redux/sliceClothes";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <nav className="flex w-full h-16 bg-zinc-800 justify-around items-center">
      <ScissorsIcon
        width="40px"
        height="40px"
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push("/");
        }}
      />

      <div className="flex items-center gap-12">
        <ArchiveBoxArrowDownIcon
          width="20px"
          height="20px"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(clearFilter())}
        />
        <Serch />
        <Cart />
      </div>
    </nav>
  );
};

export default Header;
