import React from 'react';
import {useState} from 'react';
import HighScoreGame from './HighScoreGame.js';
import CreateCompany from './CreateCompany.js';
import CreateGame from './CreateGame.js';
import DisplayGames from './DisplayGames.js';

const App = props=>{
    
    const [companies, setCompanies] = useState();
    
    const handleCompanies = (allCompanies)=>{
        setCompanies(allCompanies);
    }
    
    return <>
        <div className="app">
        <h1>Vedio Game</h1>
        <HighScoreGame />
        <CreateCompany handleCompanies={handleCompanies}/>
        <CreateGame companies={companies}/>
        <DisplayGames companies={companies}/>
        </div>
    </>
};

export default App;