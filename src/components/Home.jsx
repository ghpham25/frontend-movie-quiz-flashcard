import { React, useState } from 'react'
import Flashcard from './Flashcard'

function Home() {

  const flashcards = [{id: 0, quote: "Everybody, try laughing. Then whatever scares you will go away!",
                              movie: "My Neighbor Totoro (1988)", 
                              img: "../imgs/1.png", hint: <img src = "../imgs/hint1.png"/>, flipped: false, showHint: false},
                      {id: 1, 
                              quote: "Once you've met someone you never really forget them", 
                              movie: "Spirited Away (2001)", 
                              img: "../imgs/2.png", hint: "Zeniba said this quote", flipped: false, showHint: false}, 
                      {id: 2, 
                              quote: "It's not really important what color your dress is. What matters is the heart inside" , 
                              movie: "Kiki's Delivery Service (1989)", 
                              hint: "Main character has another thing that's red", img: "../imgs/3.png", flipped: false, showHint: false},
                      {id: 3, 
                              quote: "Life is suffering. It is hard. The world is cursed. But still, you find reasons to keep on living." , 
                              movie: "Princess Mononoke (1997)", 
                              hint: "Ashitaka said this", img: "../imgs/4.png", flipped: false, showHint: false},
                      {id: 4, 
                              quote: "Always believe in yourself. Do this and no matter where you are, you will have nothing to fear." , 
                              movie: "The Cat Returns (2002)", 
                              hint: "This movie is made in 2002", img: "../imgs/5.png", flipped: false, showHint: false},
                      {id: 5, 
                              quote: "Just follow your heart and keep smiling", 
                              movie: "Kiki's Delivery Service (1989)", 
                              img: "../imgs/6.png",hint: <img src = "../imgs/hint6.png"/>, flipped: false, showHint: false},
                      {id: 6, 
                              quote: "One thing you can always count on is that hearts change", 
                              movie: "Howl’s Moving Castle (2004)",
                              img: "../imgs/7.png", hint: "Heart is an important theme in this movie", flipped: false, showHint: false},
                      {id: 7, 
                              quote: "Whenever someone creates something with all of their heart, then that creation is given a soul", 
                              movie: "The Cat Returns (2002)",
                              img: "../imgs/8.png",hint: "Creation that is given a soul. Any thought?", flipped: false, showHint: false},
                      {id: 8, 
                              quote: "No matter how many weapons you have, no matter how great your technology might be, the world cannot live without love", 
                              movie: "Castle in the Sky (1986)", 
                              img: "../imgs/9.png", hint: "This movie is made in 1968", flipped: false, showHint: false},
                      {id: 9, 
                              quote: "The rough stone is inside of you. You have to find it…and then polish it.", 
                              movie: "Whisper of the Heart (1995)", 
                              img: "../imgs/10.png", hint: "Shiro Nishi said this quote", flipped: false, showHint: false}]
  

  const [card, setCard] = useState(flashcards[0])
  const [input, setInput] = useState("")
  const [correctMovie, setCheckedMovie] = useState("")

  const handleFlip = () => {
    setCard({...card, flipped: !card.flipped})
  }

  const handleHint = () => {
    setCard({...card, showHint: !card.showHint})
  }

  const chooseRandomCard = () => {
    let randomNum = Math.floor(Math.random() * flashcards.length);
    while (randomNum === card.id) {
      randomNum = Math.floor(Math.random() * flashcards.length);
    }
    const nextCard = flashcards[randomNum];
    setCard({...nextCard, flipped: false});
  }

  const chooseNextCard = () => {
        const nextCard = flashcards[(card.id + 1) % flashcards.length]
        setCard({...nextCard, flipped: false});
        setInput("")
        setCheckedMovie("")
  }

  const choosePreviousCard = () => {
        let nextCard;
        if (card.id !== 0) {
                nextCard = flashcards[(card.id - 1) % flashcards.length]
        } else {
                nextCard = flashcards[flashcards.length - 1]
        }
        setCard({...nextCard, flipped: false});
        setInput("")
        setCheckedMovie("")
  }

const onCheckAnswer = () => {
        const correctAnswer = card.movie.split('(')[0].trim().toLowerCase();
        const inputLowercase = input.toLowerCase();
        if (correctAnswer !== inputLowercase) {
                setCheckedMovie('wrong');
        } else {
                setCheckedMovie('correct');
        }
        console.log(correctMovie)
}

  return (
    <div className='Home'>        
        <Flashcard
        movie = {card.movie}
        quote = {card.quote}
        onFlip = {handleFlip}
        flipped = {card.flipped}
        img = {card.img}
        hint = {card.hint}
        showHint = {card.showHint}
        ></Flashcard>
        
        <div className='guess-box'>
                <input
                type='text'
                value = {input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Guess the movie name'
                id={correctMovie}
                />
                <button onClick = {onCheckAnswer}> Check Answer </button>
        </div>
        
        <div className = "container">
          {card.showHint ? <button className="button hint" onClick = {handleHint}> Quote </button> : <button className="button hint" onClick = {handleHint}> Hint </button> }
          <button className = "button prev" onClick = {choosePreviousCard}> Previous </button>
          <button className = "button next" onClick = {chooseNextCard}> Next </button>
        </div>

        <img className = "totoro" src="../imgs/totoro.png" alt="" />

    </div>
  )
}

export default Home

