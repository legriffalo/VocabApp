import React from 'react';
import { WordSets } from '../data/word-data';
import {VocabularyData} from '../data/word-data'

interface SetSelectProps {
    sets:VocabularyData;
    handler?:any;
  }
  

const SetSelect: React.FC<SetSelectProps> = ({sets, handler}) => {
  return (
    <>
   {Object.keys(sets.word_sets).map((set) => (
    <div key = {set} className = "border h-[20vh] w-1/4 p-1"> 
    <h3 className="font-bold flex justify-center bg-fiblue">{set}</h3>
    <ul>
      <li>Seen:</li>
      <li>Last:</li>
      <li>Best:</li>
      <li>Readiness:</li>
      <div className="btn btn-primary h-[3vh] w-full" onClick = {()=>{handler}}>Use</div>

    </ul>
    
    
    
    </div>
  ))}
</>
  );
};

export default SetSelect;



