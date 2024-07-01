
import './App.css'
import axios from "axios";
import { useState } from 'react';

function App() {
  const[src, setSrc] = useState("")
  let pokePic = ""
  const getPokemon = async () => {
    const choice = generateRandomNumber(1051);
    console.log('newRandomNumber:', choice)
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+ choice);
      console.log(response);
      pokePic = response.data.sprites.front_default;
    } catch (error) {
      console.error("An error occurred:", error);
    }
    setSrc(pokePic)
  };
  const generateRandomNumber = (max) => {

    return Math.floor(Math.random()*max);

  }
  

  

  return (
    <>
    <div className="body-container">
    <h1>pokemon</h1>
    <div className="container">
      
      <img src={src} alt="pokemon image" />

    </div>
    <button onClick={getPokemon}>generate pokemon</button>
    </div>
    </>
  )
}

export default App
