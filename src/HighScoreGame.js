import React from 'react';
import {useState, useEffect} from 'react';
import Game from './Game.js';

const HighScoreGame = props=>{
    
    const [game, setGame] = useState({
        name: "Final Fantasy XIV - Endwalker",
        developer: "Square Enix",
        score: 9
    });
    
    
    return <>
        <div className="highScore-game">
        <h2>High Score Game</h2>
        <Game game={game}/>
        </div>
    </>
};

export default HighScoreGame;