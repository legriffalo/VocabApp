import React from 'react';
import {VocabularyData} from '../data/word-data'
import { VocabularyWord } from '../data/word-data';
import { vitalWords } from '../data/word-data';
import { useStateStore } from '../../store';
import { useShallow } from 'zustand/shallow';

interface SetSelectProps {
    sets:VocabularyData;
  }
  

const SetSelect: React.FC<SetSelectProps> = ({sets}) => {

    //access zustand to use states
    const {
      setView,
      setSetName,
      setSelected,
    } = useStateStore(useShallow((state) => ({
      setname: state.setname,
      setView: state.setView,
      setSetName: state.setSetName,
      setSelected: state.setSelected,
    })));

   // this handler can probably migrate to the component but after testing!
   const handleState = (newView: string, name: string, selection: VocabularyWord[]) => {
    setView(newView);
    setSetName(name);
    setSelected(selection);
  };

  return (
    <>
   {Object.keys(sets.word_sets).map((set) => (
    <div key = {set} className = "border h-[20vh] w-5/16 rounded-xl p-1 text-md"> 
    <h3 className="font-bold flex justify-center bg-fiblue text-sm text-white">{set}</h3>
    <ul className="text-white">
      <li>Seen:</li>
      <li>Last:</li>
      <li>Best:</li>
      <li>score:</li>
      <div className="btn btn-primary mt-[1vh] h-[3vh] w-full" onClick = {()=>{handleState("practice", set,  vitalWords["word_sets"][set]  )}}>Use</div>

    </ul>
    
    
    
    </div>
  ))}
</>
  );
};

export default SetSelect;



