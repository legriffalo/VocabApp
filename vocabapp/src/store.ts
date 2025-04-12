import { create } from 'zustand';
import { VocabularyWord } from './assets/data/word-data';

export interface State {
    selected: VocabularyWord[];
    view: string;
    activity: string;
    setname: string;

    setSelected: (set: VocabularyWord[]) => void;
    setView: (view: string) => void;
    setActivity: (activity: string) => void;
    setSetName: (name: string) => void;
}

export const useStateStore = create<State>((set) => ({
    selected: [],
    view: 'start',
    activity: 'learn',
    setname: '',

    setSelected: (selected) => set({ selected }),
    setView: (view) => set({ view }),
    setActivity: (activity) => set({ activity }),
    setSetName: (name) => set({ setname: name }),
}));