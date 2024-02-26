import './styles/BtnPhrase.css'
import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrimages.json'

const BtnPhrase = ({setPhraseRandom, setImageSelected }) => {

const handleClick = () => {
    const phrase = getRandomFromArray(phrases)
    setPhraseRandom(phrase)

    const background = getRandomFromArray(arrImages)
    setImageSelected(background)
    console.log(background)
}

return (
    <button className='card__btn' onClick={handleClick}>probar mi suerte</button>
  )
}

export default BtnPhrase