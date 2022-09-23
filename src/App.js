import React from "react"
import Gifs from "./components/Gifs"
import Button from "./components/Button"
import Nav from "./components/Nav"
import './App.css';


export default function App() {
  // const apiKey="yN62kummflTMT03Y3hNRmIwjEkzgBKil";
  // console.log(apiKey)

  const [gifs, setGif] = React.useState(null);

  const getGif = async () => {
  const response = await fetch(
    'https://dog.ceo/api/breeds/image/random '
  )

  const data = await response.json()
 
  setGif(data.message);
};

  return (
    <div className="App">
      <Nav/>
      <Gifs getDog={gifs}/>    
      <Button getUrl={getGif}/>
    </div>
  );
} 



