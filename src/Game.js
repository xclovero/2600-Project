import React from 'react';


const Game = props=>{
    
    return <>
        <h3>{props.game.name}</h3>
        <div>Score: {props.game.score}</div>
        <div>Platform(s): {props.game.platforms.join(', ')}</div> 
        <div>Developer: {props.game.developer}</div>
    </>
};

export default Game;