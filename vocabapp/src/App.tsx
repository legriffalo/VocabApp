import {useEffect} from 'react';
import { vitalWords} from './assets/data/word-data'
import Header from './assets/components/header'
import headerImage from './assets/fv.png';  // Import the image
import Footer from './assets/components/footer'
import SetSelect from './assets/components/setselect'
import Stats from './assets/components/stats'
// import {VocabularyWord} from './assets/data/word-data'
import Practice from './assets/components/practice';
import { useStateStore } from './store';
import {useShallow } from 'zustand/shallow';
import './App.css'


function App() {

  //access zustand to use states
  const view = useStateStore(useShallow((state) => state.view));


  // this handler can probably migrate to the component but after testing!
  // const handleState = (newView: string, name: string, selection: VocabularyWord[]) => {
  //   setView(newView);
  //   setSetName(name);
  //   setSelected(selection);
  // };
  
  // turn on for publish but annoying in debugging
  useEffect(() => {
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      <div>
        <Header title = "Suomi-vocab" image = {headerImage}></Header>
      </div>

      <div className = "flex flex-wrap justify-center gap-2 mt-[12vh] h-[80vh] w-19/20 m-auto overflow-y-scroll border rounded-xl no-scrollbar p-3">
      
        {view === "start" ? (<SetSelect sets={vitalWords} />) : null}
        {view === "practice" ? (<Practice/>) : null}
        {view === "stats" ? <Stats /> : null}
      
      </div>


      <Footer></Footer>

    </>
  )
}

export default App
