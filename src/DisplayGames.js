import React from 'react';

const DisplayGames = props=>{
    
    return <>
        <h2>Games</h2>
        <form>
            <label>
                Choose a company: 
                <select defaultValue='default'>
                    <option disabled value='default'> -- choose a company --</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    </>
    
};

export default DisplayGames;