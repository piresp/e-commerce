"use client";

import { ScissorsIcon } from "@heroicons/react/16/solid";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/16/solid";
import Cart from "./components/Cart";
import Serch from "./components/Serch";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearFilter } from "@/redux/sliceClothes";
import useScrollPosition from "@/app/_hooks/useScrollPosition";
import { useUser } from "@clerk/nextjs";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useUser()

  const scrollPosition = useScrollPosition();
  const opacity = scrollPosition > 0 ? 'opacity-95' : 'opacity-100';

  return (
    <nav className={`flex w-full h-16 bg-zinc-800 justify-around items-center sticky top-0 z-50 transition-opacity duration-500 ${opacity}`}>
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
        {!!user ? <img src={user.imageUrl} alt="User profile" className="w-8 h-8 rounded-full ml-16 cursor-pointer" onClick={() => router.push('/sign-out')} /> : null}
      </div>
    </nav>
  );
};

export default Header;
