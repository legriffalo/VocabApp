import React from 'react';
// import { WordSets } from '../data/word-data';
import {VocabularyData} from '../data/word-data'
import { vitalWords } from '../data/word-data';


interface SetSelectProps {
    sets:VocabularyData;
    handler?:any;
  }
  

const SetSelect: React.FC<SetSelectProps> = ({sets, handler}) => {
  return (
    <>
   {Object.keys(sets.word_sets).map((set) => (
    <div key = {set} className = "border h-[20vh] w-5/16 rounded-xl p-1 text-md"> 
    <h3 className="font-bold flex justify-center bg-fiblue text-sm text-white">{set}</h3>
    <ul>
      <li>Seen:</li>
      <li>Last:</li>
      <li>Best:</li>
      <li>score:</li>
      <div className="btn btn-primary mt-[1vh] h-[3vh] w-full" onClick = {()=>{handler("practice", set,  vitalWords["word_sets"][set]  )}}>Use</div>

    </ul>
    
    
    
    </div>
  ))}
</>
  );
};

export default SetSelect;



