import React from 'react';
import './ResumePart.css'


export const ResumePart = (props) => 
    <div className="ResumePart">
        {props.part.map((subparts) => <p>{subparts}</p>)}
    </div>