import { controllerModalSerch } from "@/redux/sliceModals";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

const Serch = () => {
  const dispatch = useDispatch()

  return (
    <MagnifyingGlassIcon
      width="20px"
      height="20px"
      className="cursor-pointer hover:text-zinc-300 duration-500"
      onClick={() => dispatch(controllerModalSerch())}
    />
  );
};

export default Serch;
