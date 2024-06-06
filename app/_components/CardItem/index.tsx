"use client";

import { TailwindDivType } from "@/tailwind/type";
import React from "react";

const CardItem = ({ ...rest }: TailwindDivType) => {
  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <div
      className="relative w-80 h-w-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ cursor: "default" }}
    >
      <img
        className="rounded-2xl w-full h-auto z-0 relative"
        src="https://images.tcdn.com.br/img/img_prod/654361/vestido_tomara_que_caia_verde_3813_1_2ffe32dac5c8dae4d7ca7d3079e66cd6.jpg"
        alt="car!"
      />

      <div className={`w-full h-full absolute top-0 flex flex-end ${!hover ? "opacity-100" : "opacity-0"} duration-500 ease-in-out`}>
        <span className="h-fit w-full self-end p-6 text-xl text-white font-medium">
          <span className="px-3 py-2 bg-zinc-800 bg-opacity-45 rounded-lg">R$ 00,00</span>
        </span>
      </div>

      <div
        className={`w-full h-full ${hover ? "opacity-100" : "opacity-0"
          } bg-black bg-opacity-40 z-20 absolute top-0 p-6 grid grid-cols-[auto_100px] grid-rows-[auto_24px_50px_40px] gap-2 transition-all duration-500 ease-in-out rounded-2xl`}
      >
        <span className="text-xl row-start-2 col-span-2">
          Title: title awjd
        </span>
        <span className="text-base row-start-3 col-span-2">
          Description: awudhaiuwd awdhu awd hiawd hui
        </span>

        <span className="ml-3 text-xl row-start-4 self-end font-medium">
          R$ 00,00
        </span>

        <button className="btn btn-success row-start-4 col-start-2 text-gray-50">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default CardItem;
// https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg
