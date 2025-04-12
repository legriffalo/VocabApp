import React from 'react';
import {VocabularyWord} from '../data/word-data'
// import { useStateStore } from '../../store';
// import { useShallow } from 'zustand/shallow';

interface MatchefProps {
    name?:string;
    set?:VocabularyWord[];
    
  }
  
//   const handleToggle = (e: React.PointerEvent<HTMLDivElement>) => {
//     const target = e.currentTarget
//     const children = target.children;
//     target.classList.toggle("bg-fiblue");
//     target.classList.toggle("bg-green-600");
//     children[0].classList.toggle("hidden");
//     children[1].classList.toggle("hidden");
//   };
   




const Matchef: React.FC<MatchefProps> = () => {
    // console.log(set)
    // const {
    //   selected,
    // } = useStateStore(useShallow((state) => ({
    //   selected: state.selected,
    // })));

    console.log('Matchef component rendered'); // Debugging step




    return (
        <>
        <div className = "w-full border h-1/3 bg-orange-800 flex justify-center items-center text-xl">
            <p>Match 1-4 coming soon...</p>
        </div>
          {/* {selected.map((item,index) => (
            <div onPointerDown={handleToggle}  key = {index} className = "aspect-[4/1] h-1/17 rounded bg-blue-400 flex flex-col justify-center items-center w-1/4">
            <p >{item.word}</p>
            <p className = "hidden">{item.translation}</p>
            </div>))
            } */}
    
        {/* <div className="btn btn-warning w-1/4" onClick={()=> {handler("start")}}>Back</div> */}
        </>
      );
    };

export default Matchef;



