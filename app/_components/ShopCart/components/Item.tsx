import { XMarkIcon } from "@heroicons/react/16/solid"
import { PlusIcon } from "@heroicons/react/16/solid"
import { MinusIcon } from "@heroicons/react/16/solid"

const Item = () => {
  return (
    <div className="w-full min-w-[680px] h-56 content-center gap-3 flex">
      <img
        src="https://images.tcdn.com.br/img/img_prod/654361/vestido_tomara_que_caia_verde_3813_1_2ffe32dac5c8dae4d7ca7d3079e66cd6.jpg"
        alt="car!"
        className="w-48 h-48 object-cover rounded-2xl self-center"
      />
      <div className="py-5 self-center flex flex-col">
        <span className="text-zinc-950 text-xl">Title</span>
        <span className="text-zinc-500 text-base">Size: M</span>
        <span className="text-zinc-950 text-base">R$ 00,00</span>
      </div>
      <div className="w-64 self-center">
        <div className="flex self-center gap-3 ml-12">
          <MinusIcon className="w-3 h-3 text-zinc-400 cursor-pointer self-center" />
          <span className="text-zinc-950">1</span>
          <PlusIcon className="w-3 h-3 text-zinc-400 cursor-pointer self-center" />
        </div>
      </div>
      <div className="mt-2">
        <XMarkIcon className="w-6 h-6 text-zinc-400 cursor-pointer" />
      </div>
    </div>
  )
}

export default Item