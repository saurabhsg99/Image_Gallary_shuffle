
import { useState } from 'react'
// import './App.css'
import data from './data'

// Helper to shuffle array
function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


function shuffle(data) {
  // Choose the center image (e.g., last image)
  const centerIndex = Math.floor(data.length / 2);// Change this to fix a different image
  const centerImage = data[centerIndex];
  const restImages = data.filter((_, idx) => idx !== centerIndex);

  // Shuffle the rest
  const shuffledRest = fisherYatesShuffle([...restImages]);

  // Insert center image at the middle
  const middle = Math.floor(data.length / 2);
  shuffledRest.splice(middle, 0, centerImage);
  return shuffledRest;

}

function App() {
  const shuffledRest = shuffle(data);
  let [shuffle_rest, setShuffle] = useState(shuffledRest);
  const elements = shuffle_rest.map((item, idx) => (
    <figure key={idx}>
      <img src={item.img} alt={item.name} />
      <figcaption>{item.name}</figcaption>
    </figure>
  ));
function HandleClick(){
  setShuffle(shuffle(shuffle_rest))
}
  return (
    <div className='container'>
      <h1>Aimers</h1>
      <button onClick={HandleClick} >Shuffle </button>
      <div className='gallary'>
        {elements}
      </div>

    </div>
  )
}

export default App
