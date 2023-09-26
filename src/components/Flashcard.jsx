import {React, useState} from "react";

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
                {props.flipped ? "" : (props.showHint ? props.hint : <div className = "quote"> "{props.quote}" </div>)}
            </div>
        </div>
    );
};
export default Flashcard
