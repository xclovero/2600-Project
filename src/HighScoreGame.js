import React from 'react';
import {useState, useEffect} from 'react';
import Game from './Game.js';
import axios from 'axios';

const HighScoreGame = props=>{
    
    const [game, setGame] = useState();
    
    const frequency = 10000;
    
    useEffect(function setTimeReload(){
        const reload = () => {
            axios.get('/GameAPI/games/high-score')
            .then(result=>{
                let random = Math.floor(Math.random()*result.data.length);
                setGame(result.data[random]);
            })
            .catch(error=>console.log(error));
        }
        
        
        let reloader = setInterval(reload, frequency);
        reload();
        
        return function stopReload(){
            clearInterval(reloader);
        }
    }, []);
    
    return <>
        <div className="highScore-game">
        <h2>High Score Game</h2>
        {game != undefined &&
        <Game game={game}/>}
        </div>
    </>
};

export default HighScoreGame;