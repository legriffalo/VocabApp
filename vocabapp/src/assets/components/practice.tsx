import React from 'react';
// import { WordSets } from '../data/word-data';
// import {VocabularyData} from '../data/word-data'
import {VocabularyWord} from '../data/word-data'

interface PracticeProps {
    name:string;
    set:VocabularyWord[];
    mode?:string;
    handler:any;
    state:{};
  }
  
  const handleToggle = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    const children = target.children;
    target.classList.toggle("bg-fiblue");
    target.classList.toggle("bg-green-600");

    children[0].classList.toggle("hidden");
    children[1].classList.toggle("hidden");

    // setTimeout(()=>{
    //     target.classList.toggle("bg-fiblue");
    //     target.classList.toggle("bg-green-600");
    //     children[0].classList.toggle("hidden");
    //     children[1].classList.toggle("hidden");
    // },1500)
  };
   
const Practice: React.FC<PracticeProps> = ({name,set,handler}) => {
    // console.log(set)
    // console.log(state)



  return (
    <>
      <div className="w-full  flex justify-center items-center bg-white text-fiblue rounded-xl"><p>set: {name} </p>  </div>
      {console.log(set[0])}

      {set.map((item,index) => (
        <div onPointerDown={handleToggle} onPointerUp={handleToggle} key = {index} className = "aspect-[4/1] h-1/17 rounded bg-blue-400 flex flex-col justify-center items-center w-1/4">
        <p >{item.word}</p>
        <p className = "hidden">{item.translation}</p>
        </div>))
        }

    <div className="btn btn-warning w-1/4" onClick={()=> {handler("start")}}>Back</div>
    </>
  );
};

export default Practice;



