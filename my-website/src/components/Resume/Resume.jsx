import React from 'react';
import './Resume.css'
import { ResumePart } from "../ResumePart/ResumePart.jsx";

export const Resume = (props) =>    {
    console.log(props);
    return(
        <div className="Resume">
            {props.resume.map((part) => <ResumePart title={part.title} part={part.part} />)}
        </div>
    )
}   
    
    
