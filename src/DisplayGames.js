import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Game from './Game.js';

const DisplayGames = props=>{
    
    const [games, setGames] = useState([]);
    const [company, setCompany] = useState();
    
    useEffect(function handleGamesFromCompany(){
        axios.get(`/GameAPI/company/${company}`)
        .then(result=>{
            setGames(result.data.games);
        })
        .catch(error=>console.log(error));
    }, [company]);
    
    const handleChangeCompany = event=>{
        event.preventDefault();
        setCompany(event.target.value);
    };
    
    return <>
        <div className="displayGame">
        <h2>Games</h2>
        <form>
            <label>
                Choose a company: 
                <select defaultValue='default' onChange={event=>handleChangeCompany(event)}>
                    <option disabled value='default'> -- choose a company --</option>
                    {props.companies != undefined &&
                    props.companies.map((company,index)=>
                    <option key={index} value={company.name}>{company.name}</option>)}
                </select>
            </label>
        </form>
        <ul>
            {games != undefined && games.map((game,index)=>
            <li key={index}><Game game={game} /></li>)}
        </ul>
        </div>
    </>
    
};

export default DisplayGames;