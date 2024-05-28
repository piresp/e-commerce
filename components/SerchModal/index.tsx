const SerchModal = () => {
  
  const serchModal = true

  return (
    <div className={` flex flex-col backdrop-blur-sm z-40 w-full h-screen absolute top-0 ${serchModal ? 'opacity-100' : 'opacity-0'} transition-all delay-500`} >
      <label className="input input-bordered flex items-center gap-2 w-96 self-center mt-28">
        <input type="text" className="grow" placeholder="Search" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>
    </div>
  )
}

export default SerchModal