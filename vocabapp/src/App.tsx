import { vitalWords} from './assets/data/word-data'
import './App.css'
import Header from './assets/components/header'
import headerImage from './assets/fv.png';  // Import the image
import Footer from './assets/components/footer'
import SetSelect from './assets/components/setselect'

function App() {
  console.log(vitalWords["word_sets"]["word_set0"])

  return (
    <>
      <div>
        <Header title = "Suomi-vocab" image = {headerImage}></Header>
      </div>

      <div className = "flex flex-wrap justify-center gap-2 mt-[10vh] h-[80vh] w-9/10 m-auto overflow-y-scroll border">
      <SetSelect sets = {vitalWords}></SetSelect>
      </div>


      <Footer></Footer>

    </>
  )
}

export default App
