import React from 'react';
// import {VocabularyWord} from '../data/word-data'
import { useStateStore } from '../../store';
import { useShallow } from 'zustand/shallow';
import {State} from '../../store'
import Learn from './learn';
import Matchef from './matchef';
import Match14 from './match14';
import Assessment from './assessment';

interface PracticeProps {
    handler?:any;
    state?:{};
  }
  
const Practice: React.FC<PracticeProps> = () => {
 
  // acces and use zustand store use shallow-required to stop rerender runaway  
  const { activity, setname, setView, setActivity } = useStateStore(
    useShallow((state: State) => ({
      activity: state.activity,
      setname: state.setname,
      setView: state.setView,
      setActivity: state.setActivity,
    
    })),
  );

  // console.log(state)
  const handleModeChange = (mode:string)=>{
  console.log(mode)
  setActivity(mode)
  }

  // this handler can probably migrate to the component but after testing!
  const handleView = (newView: string) => {
    setView(newView);
  };
 
  return (
    <>
      <div className="w-full  flex justify-center items-center bg-white text-fiblue rounded-xl"><p>set: {setname} </p>  </div>
        <div className="w-[80vw] flex justify-center gap-1">
          <div className="btn btn-primary" onClick={()=>handleModeChange("learn")}>learn</div>
          <div className="btn btn-primary" onClick={()=>handleModeChange("matchef")}>match E-F</div>
          <div className="btn btn-primary" onClick={()=>handleModeChange("match1-4")}>Match 1 to 4 </div>
          <div className="btn btn-primary" onClick={()=>handleModeChange("assessment")}>Assessment </div>

        </div>


      {activity=="learn"?<Learn></Learn>:null}
      {activity=="matchef"?<Matchef></Matchef>:null}
      {activity=="match1-4"?<Match14></Match14>:null}
      {activity=="assessment"?<Assessment></Assessment>:null}



      {/* {set.map((item,index) => (
        <div onPointerDown={handleToggle}  key = {index} className = "aspect-[4/1] h-1/17 rounded bg-blue-400 flex flex-col justify-center items-center w-1/4">
        <p >{item.word}</p>
        <p className = "hidden">{item.translation}</p>
        </div>))
        } */}

    <div className="btn btn-warning w-1/4" onClick={()=> {handleView("start")}}>Back</div>
    </>
  );
};

export default Practice;



