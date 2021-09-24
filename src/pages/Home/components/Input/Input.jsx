import React from "react";
import './Input.css';

const Input = ({atributte, handleChange, param}) => {
    return(
        <div className='div-container'>
            <div className="input-group mb-3">
            <input
            id={atributte.id}
            name={atributte.name}
            placeholder={atributte.placeholder}
            type={atributte.type}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className= { param ? 'form-control border input-error' : 'form-control border' }
            />
            </div>
        </div>
    )
};

export default Input;