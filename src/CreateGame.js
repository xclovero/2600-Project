import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const CreateGame = props=>{
    
    const [pc, setPc] = useState(false);
    const [ps4, setPs4] = useState(false);
    const [ps5, setPs5] = useState(false);
    const [xbox, setXbox] = useState(false);
    const [ns, setNs] = useState(false);
    const [name, setName] = useState();
    const [developer, setDeveloper] = useState();
    const [score, setScore] = useState();
    const [game, setGame] = useState();
    const [errorMessage, setErrorMessage] = useState([]);
    const [displayError, setDisplayError] = useState(false);
    
    const changePC = ()=>{
        setPc(!pc);
    };
    
    const changePS4 = ()=>{
        setPs4(!ps4);
    };
    
    const changePS5 = ()=>{
        setPs5(!ps5);
    };
    
    const changeXbox = ()=>{
        setXbox(!xbox);
    };
    
    const changeNS = ()=>{
        setNs(!ns);
    };
    
    const handleName = event =>{
        setName(event.target.value);
    };
    
    const handleCompany = event=>{
        setDeveloper(event.target.value);
    };

    const handleScore = event=>{
        setScore(event.target.value);
    };
    
    const submitGame = event=>{
        event.preventDefault();
        let platform = [];
        if(pc){
            platform.push('PC');
        }
        if(ps4){
            platform.push('PS4');
        }
        if(ps5){
            platform.push('PS5');
        }
        if(xbox){
            platform.push('Xbox');
        }
        if(ns){
            platform.push('NS');
        }
        let game = {
            name: name,
            developer: developer,
            platforms: platform,
            score: score
        };
        
        axios.post('/GameAPI/games', game)
        .then(result=>{
            if (Array.isArray(result.data)){
                setErrorMessage(result.data);
                setDisplayError(true);
            } else {
                setGame(result.data);
                setDisplayError(false);
            }
        })
        .catch(error=>console.log(error));
    }
    
    return <>
        <div className="createGame">
        <h2>Create Game</h2>
        {displayError && <div className="error">Error: {errorMessage.join(" ")}</div>}
        <form onSubmit={event=>submitGame(event)} className="create-game">
            <div className="label">
            <label>
                Name of game: 
                <input type="text" onChange={event=>{handleName(event)}}/>
            </label>
            </div>
            <div className="label">
            <label>
                Choose a company: 
                <select defaultValue='default' onChange={event=>{handleCompany(event)}}>
                    <option disabled value='default'> -- choose a company --</option>
                    {props.companies != undefined &&
                    props.companies.map((company,index)=>
                    <option key={index} value={company.name}>{company.name}</option>)}
                </select>
            </label>
            </div>
            <div className="label">
            <label>
                Platform(s):
                <label>
                    PC
                    <input type="checkbox" checked={pc} onChange={changePC} />
                </label>
                <label>
                    PS4
                    <input type="checkbox" checked={ps4} onChange={changePS4} />
                </label>
                <label>
                    PS5
                    <input type="checkbox" checked={ps5} onChange={changePS5} />
                </label>
                <label>
                    Xbox
                    <input type="checkbox" checked={xbox} onChange={changeXbox} />
                </label>
                <label>
                    NS
                    <input type="checkbox" checked={ns} onChange={changeNS} />
                </label>
            </label>
            </div>
            <div className="label">
            <label>
                Score: 
                <input type="number" onChange={event=>{handleScore(event)}}/>
            </label>
            </div>
            <div className="label">
            <button>Submit new game</button>
            </div>
        </form>
        </div>
    </>
};

export default CreateGame;