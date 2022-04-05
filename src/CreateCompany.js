import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const CreateCompany = props=>{
    
    const [company, setCompany] = useState();
    const [errorMessage, setErrorMessage] = useState([]);
    const [displayError, setDisplayError] = useState(false);
    
    const handleCompany = event=>{
        let developer = {'name': event.target.value};
        setCompany(developer);
    };
    
    const submitNewCompany = event=>{
        event.preventDefault();
        axios.post('/GameAPI/company', company)
        .then(result=>{
            if (Array.isArray(result.data)){
                setErrorMessage(result.data);
                setDisplayError(true);
            } else {
                setDisplayError(false);
            }
        })
        .catch(error=>console.log(error));
        axios.get('/GameAPI/company')
        .then(result=>{
            props.handleCompanies(result.data);
        })
        .catch(error=>console.log(error));
    };
    
    return <>
    <div className="createCompany">
        <h2>Create Company</h2>
        {displayError && <div className="error">Error: {errorMessage}</div>}
        <form onSubmit={event=>submitNewCompany(event)}>
            <label>
                Name of company: 
                <input type="text" onChange={event=>handleCompany(event)}/>
            </label>
            <button>Submit new company</button>
        </form>
    </div>    
    </>
};

export default CreateCompany;