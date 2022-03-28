import React from 'react';

const CreateCompany = props=>{
    
    return <>
        <h2>Create Company</h2>
        <form>
            <label>
                Name of company: 
                <input type="text" />
            </label>
            <button>Submit new company</button>
        </form>
    </>
};

export default CreateCompany;