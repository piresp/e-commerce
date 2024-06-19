"use client";

import { fetchClothes } from "@/redux/sliceClothes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../_components/Header";
import ProvideModals from "../_components/Modals";
import PanelItems from "../_components/PanelItems";

export default function Home() {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchClothes());
  });

  return (
    <div className="bg-zinc-200 w-full h-full min-h-dvh">
      <Header />
      <PanelItems />
      <ProvideModals />
    </div>
  );
}
