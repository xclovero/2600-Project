import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const CreateCompany = props=>{
    
    const [company, setCompany] = useState();
    
    const handleCompany = event=>{
        let developer = {'name': event.target.value};
        setCompany(developer);
    };
    
    const submitNewCompany = event=>{
        event.preventDefault();
        axios.post('/GameAPI/company', company)
        .then(result=>{
            console.log(result.data);
        })
        .catch(error=>console.log(error));
    };
    
    return <>
        <h2>Create Company</h2>
        <form onSubmit={event=>submitNewCompany(event)}>
            <label>
                Name of company: 
                <input type="text" onChange={event=>handleCompany(event)}/>
            </label>
            <button>Submit new company</button>
        </form>
    </>
};

export default CreateCompany;