import {useState,useEffect} from 'react';
import { vitalWords} from './assets/data/word-data'
import Header from './assets/components/header'
import headerImage from './assets/fv.png';  // Import the image
import Footer from './assets/components/footer'
import SetSelect from './assets/components/setselect'
import Stats from './assets/components/stats'
import {VocabularyWord} from './assets/data/word-data'
import Practice from './assets/components/practice';
import './App.css'

interface State {
  selected: VocabularyWord[];
  view: string;
  activity: string;
  setname: string;
}

function App() {
  // console.log(vitalWords["word_sets"])
  const [state, setState] = useState<State>({
    selected: [],
    view: "start",
    activity: "default",
    setname: "",
  });

  useEffect(() => {
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // change views
  const handleState = (newView: string, name: string, selection: VocabularyWord[]) => {
    setState(prevState => ({
      ...prevState,
      view: newView,
      setname: name,
      selected: selection
    }));
  };
  return (
    <>
      <div>
        <Header title = "Suomi-vocab" image = {headerImage}></Header>
      </div>

      <div className = "flex flex-wrap justify-center gap-2 mt-[12vh] h-[80vh] w-19/20 m-auto overflow-y-scroll border rounded-xl no-scrollbar p-3">
      
        {state.view=="start"? <SetSelect sets = {vitalWords} handler = {handleState}></SetSelect>:null}
        {state.view == "practice"? <Practice name = {state.setname} set = {state.selected} state = {state} handler = {handleState}></Practice>:null}
        {state.view =="stats"? <Stats></Stats>:null}
      
      </div>


      <Footer></Footer>

    </>
  )
}

export default App
