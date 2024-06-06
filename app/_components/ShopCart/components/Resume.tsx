const Resume = () => {
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
        <span className="text-zinc-800 text-base">R$ 00,00</span>
      </div>
      <button className="btn btn-info mt-auto text-zinc-100">Comprar</button>
    </div>
  )
}

export default Resume