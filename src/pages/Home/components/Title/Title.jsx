import React from "react";
import './Title.css'

const Title = ({text}) => {
    return(
        <div className="row">
            <div className="mx-auto">
            <div className="card-header">
               <h1 className='title-container'>{text}</h1>
             </div>
            </div>
        </div>
    )
};

export default Title;