import React from 'react';


const Game = props=>{
    
    return <>
        <h3>{props.game.name}</h3>
        <div>Developer(s): {props.game.developer}</div>
        <div>Score: {props.game.score}</div>
    </>
};

export default Game;