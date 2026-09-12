import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Itecnology } from "./type";
import ExploreTechnologyCard from "./ExploreTechnologyCard";
import ExploreTechnologySatckCard from "./ExploreTechnologySatckCard";
import { toast } from "react-toastify";

export type ExploreTechnologyProps = {
  technologiesPromise: Promise<Itecnology[]>
};

const ExploreTechnology = ({ technologiesPromise }: ExploreTechnologyProps) => {
  const technologies = use(technologiesPromise);
  console.log(technologies);

  const [addedStack, setAddedStack] = useState<Itecnology[]>([]);
  console.log("addd stack");

  const handleAddedStacks = (stack:Itecnology) =>{
    toast.success(`${stack.name} Remove to Card`,{
          position: "top-center",
        })
    console.log(stack.id,"stack id");
    const removeStack = addedStack.filter(item=> item.id !== stack.id)

    setAddedStack(removeStack)
        
    }

    const handleRemoveAllCard = () =>{
        setAddedStack([])
        if(addedStack.length > 0){
          toast.success(`Remove ALL Card`,{
          position: "top-center",
        })
        }
    }


  return (
    <div className="container mx-auto">
      <div className=" space-y-4 mb-7">
        <h2 className="text-4xl text-[#64748B] font-extrabold">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="grid md:grid-cols-12 gap-2">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:col-span-9">
          {technologies.map((technology, id) => {
            return (
              <ExploreTechnologyCard
                technology={technology}
                key={id}
                setAddedStack={setAddedStack}
                addedStack={addedStack}
              />
            );
          })}
        </div>
        <div className="md:col-span-3">
          <div className="border  border-gray-200 bg-gray-100 p-2 rounded-xl space-y-3 sticky top-17 z-40">
            <h2 className="text-xl font-bold">Your Stack</h2>
            <p className="text-sm"><span className="font-bold">{addedStack.length}</span> Technology Selected</p>

            <div className="grid grid-cols-1 gap-2">
              {addedStack.map((stacks, index) => {
                return <ExploreTechnologySatckCard stacks={stacks} key={index} handleAddedStacks={handleAddedStacks}/>;
              })}
            </div>
            <button
              onClick={() => handleRemoveAllCard()}
              className="btn w-full border-red-300  text-red-400 font-semibold "
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTechnology;
