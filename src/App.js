import React from 'react';
import {useState} from 'react';
import HighScoreGame from './HighScoreGame.js';
import RandomGame from './RandomGame.js';
import CreateCompany from './CreateCompany.js';
import CreateGame from './CreateGame.js';
import DisplayGames from './DisplayGames.js';

const App = props=>{
    
    return <>
        <div className="app">
        <h1>Vedio Game</h1>
        <HighScoreGame />
        <RandomGame />
        <CreateCompany />
        <CreateGame />
        <DisplayGames />
        </div>
    </>
};

export default App;