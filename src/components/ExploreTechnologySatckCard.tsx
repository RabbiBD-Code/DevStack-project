import type { Itecnology } from './type';

interface StacksProps {
    stacks: Itecnology,
    handleAddedStacks: (stacks: Itecnology) => void
}

const ExploreTechnologySatckCard = ({stacks, handleAddedStacks}:StacksProps) => {

    

    return (
        <div className="border border-gray-200 bg-gray-100 p-2 rounded-xl space-y-3">
                    <div className="flex justify-between items-center">
                   <div className="flex items-center gap-4">
                     <img
                      src={stacks.icon}
                      alt=""
                      className="w-8 h-8 object-contain"
                    />
                    <div>
                      <h2 className="font-bold text-sm">{stacks.name}</h2>
                      <p className='text-sm'>{stacks.category}</p>
                    </div>
                   </div>
                    <div onClick={()=> handleAddedStacks(stacks)} className="text-2xl text-gray-600 hover:bg-gray-300 p-2 rounded-full">x</div>
                  </div>
                  </div>
    );
};

export default ExploreTechnologySatckCard;