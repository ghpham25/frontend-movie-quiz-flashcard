import { React, useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'

function App() {

  const flashcards = [{id: 0, quote: "Everybody, try laughing. Then whatever scares you will go away!" , movie: "My Neighbor Totoro (1988)", img: "../imgs/1.png", flipped: false},
                      {id: 1, quote: "Once you've met someone you never really forget them" , movie: "Spirited Away (2001)", img: "../imgs/2.png", flipped: false}, 
                      {id: 2, quote: "It's not really important what color your dress is. What matters is the heart inside" , movie: "Kiki's Delivery Service (1989)",img: "../imgs/3.png", flipped: false},
                      {id: 3, quote: "Life is suffering. It is hard. The world is cursed. But still, you find reasons to keep on living." , movie: "Princess Mononoke (1997)", img: "../imgs/4.png", flipped: false},
                      {id: 4, quote: "Always believe in yourself. Do this and no matter where you are, you will have nothing to fear." , movie: "The Cat Returns (2002)",img: "../imgs/5.png", flipped: false},
                      {id: 5, quote: "Just follow your heart and keep smiling", movie: "Kiki's Delivery Service (1989)", img: "../imgs/6.png", flipped: false},
                      {id: 6, quote: "One thing you can always count on is that hearts change", movie: "Howl’s Moving Castle (2004)",img: "../imgs/7.png", flipped: false},
                      {id: 7, quote: "Whenever someone creates something with all of their heart, then that creation is given a soul", movie: "The Cat Returns (2002)",img: "../imgs/8.png", flipped: false},
                      {id: 8, quote: "No matter how many weapons you have, no matter how great your technology might be, the world cannot live without love", movie: "Castle in the Sky (1986)", img: "../imgs/9.png",flipped: false},
                      {id: 9, quote: "The rough stone is inside of you. You have to find it…and then polish it.", movie: "Whisper of the Heart (1995)", img: "../imgs/10.png", flipped: false}]
  

  const [card, setCard] = useState(flashcards[0])

  const handleFlip = () => {
    setCard({...card, flipped: !card.flipped})
  }

  const chooseRandomCard = () => {
    let randomNum = Math.floor(Math.random() * flashcards.length);
    while (randomNum === card.id) {
      randomNum = Math.floor(Math.random() * flashcards.length);
    }
    const nextCard = flashcards[randomNum];
    setCard({...nextCard, flipped: false});
  }

  return (
    <div className="App">
      <h1> Guess the <b> Ghibli Movie</b> </h1>
      <h2> Can you guess the movie from its quote? </h2>
      <h3> Number of flashcards: 10 </h3>
        <Flashcard
        movie = {card.movie}
        quote = {card.quote}
        onFlip = {handleFlip}
        flipped = {card.flipped}
        img = {card.img}
        ></Flashcard>
        <button className = "button" onClick = {chooseRandomCard}> Next </button>

    </div>
  )
}

export default App
