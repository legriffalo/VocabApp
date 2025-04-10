import React from 'react';
// import { WordSets } from '../data/word-data';
// import {VocabularyData} from '../data/word-data'
// import {VocabularyWord} from '../data/word-data'

interface StatsProps {
    stats?:{};
  }
  

const Stats: React.FC<StatsProps> = () => {
  return (
    <>
      <p>Stats mode engaged! See you usage stats here</p>
    </>
  );
};

export default Stats;



