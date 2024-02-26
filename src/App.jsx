import { useState } from 'react'
import './App.css'
import phrases from './assets/utils/phrases.json'
import getRandomFromArray from './assets/utils/getRandomFromArray'
import PhraseCard from './assets/components/PhraseCard'
import BtnPhrase from './assets/components/BtnPhrase'
import arrImages from './assets/utils/arrimages.json'

function App() {

  const initialValue = getRandomFromArray(phrases)
  const [phraseRandom, setPhraseRandom] = useState(initialValue)
  
  const initialImage = getRandomFromArray(arrImages)
  const [imageSelected, setImageSelected] = useState(1)
  
  const objStyle = {
    backgroundImage: `url("/fondo${imageSelected}.png")`
  }
  console.log(`url("/fondo${imageSelected}.png")`)
  return (
    <div className='app' style={objStyle}>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      <article className='app__card'>
        <PhraseCard phraseRandom={phraseRandom} />
        <BtnPhrase 
        setPhraseRandom={setPhraseRandom} 
        setImageSelected={setImageSelected}
      />
      </article>
      
    </div>
  )
}

export default App
