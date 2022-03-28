import React from 'react';

const CreateGame = props=>{
    
    return <>
        <h2>Create Game</h2>
        <form>
            <label>
                Name of game: 
                <input type="text" />
            </label>
            <label>
                Choose a company: 
                <select defaultValue='default'>
                    <option disabled value='default'> -- choose a company --</option>
                </select>
            </label>
            <label>
                Score: 
                <input type="number" />
            </label>
            <button>Submit new game</button>
        </form>
    </>
};

export default CreateGame;