import { useState, type Dispatch, type SetStateAction } from "react";
import type { Itecnology } from "./type";
import { toast } from "react-toastify";
import { CiStar } from "react-icons/ci";

export type ExploreTechnologyCardProps = {
  technology: Itecnology
  addedStack: Itecnology[],
  setAddedStack: Dispatch<SetStateAction<Itecnology[]>>
};

const ExploreTechnologyCard = ({ technology, setAddedStack, addedStack }: ExploreTechnologyCardProps) => {

    const isSelected = addedStack.some(item => item.id === technology.id)

  // const [isSelected, setIsSelected] = useState(false);
  const handleAddedStack = (stack:Itecnology) =>{
    toast.success(`${stack.name} added Succes full`,{
      position: "top-center",
    })
    if(isSelected){
      return;
    }
    // setIsSelected(true)
    setAddedStack([...addedStack, stack])
  }


  return (
    <div className="border border-gray-200 bg-gray-100 p-2 rounded-2xl space-y-3">
      <div className="flex justify-between items-center ">
        <img
          src={technology.icon}
          alt=""
          className="w-12 h-12 object-contain"
        />
        <span className="bg-green-200 rounded-full px-4 p-1 text-sm font-light">
          {technology.badge}
        </span>
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold text-xl">{technology.name}</h2>
        <p>{technology.description}</p>
        <div className="text-gray-300">
          <hr />
        </div>
      </div>

      <div className="flex justify-between items-center text-sm">
        <p className="border border-gray-300 bg-white px-2 rounded-md">
          {technology.category}
        </p>
        <p>{technology.difficulty}</p>
        <p className="flex items-center gap-1"><CiStar className="text-orange-300 font-extrabold " />{technology.rating}</p>
      </div>
      <button onClick={() => handleAddedStack(technology)} className={`btn w-full bg-black text-white font-semibold ${isSelected && "bg-red-200"}`} disabled={isSelected}>
        {isSelected? "Added to Stack":"Add to Stack"}
      </button>
    </div>
  );
};

export default ExploreTechnologyCard;
