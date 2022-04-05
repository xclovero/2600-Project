import React from 'react';


const Game = props=>{
    
    return <>
        <h3>{props.game.name}</h3>
        <div>Average score: {props.game.score}</div>
        <div>Number of ratings: {props.game.count}</div>
        <div>Platform(s): {props.game.platforms.join(', ')}</div> 
        <div>Developer: {props.game.developer}</div>
    </>
};

export default Game;