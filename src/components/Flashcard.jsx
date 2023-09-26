import {React, useState} from "react";

/* To do: Add hint feature: 
- when the user click "Hint" button to the left of the Next button: 
    + hint button disappears, turns into show quote button (and if the user click show quote, 
    the quote disappear and show quote turns back into "Hint" and so on)
    + the front page replaces the quote with the hint
    + when click the card, the answer shows
*/

/* Flashcard includes a pair of information, the quote and the movie */
const Flashcard = (props) => {
    const flipCard = () => {
        props.onFlip()
    }

    return (
        <div className= {`card ${props.flipped ? "flipped" : ""}`} onClick={flipCard} >
            <div className="flip-card-back">
                {props.flipped ? (
                    <>
                        <div className = "movie">{props.movie}</div>
                        <img className = "image" src={props.img} alt={`image of ${props.movie}`} />
                    </>
                ) : ""}
            </div>
            <div className="flip-card-front">
                {/* {props.flipped ? "" : (<div className = "quote"> "{props.quote}" </div> )} */}
                {props.flipped ? "" : (props.showHint ? props.hint : props.quote)}
            </div>
        </div>
    );
};
export default Flashcard

/* pseudo code hint logic
if props.flipped: 
show movie

if not props.flipped: 
    if props.showHint : display props.Hint
    else: display props.quote 

    {props.flipped? "" : {props.showHint ? {props.hint} : {props.quote}}
*/

// {props.flipped ? "" : (props.showHint ? props.hint : props.quote)}
