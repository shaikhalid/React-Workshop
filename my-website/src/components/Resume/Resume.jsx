import React from 'react';
import './Resume.css'
import { ResumePart } from "../ResumePart/ResumePart.jsx";

export const Resume = (props) =>    
    <div className="Resume">
        {props.resume.map((part) => <ResumePart part={part.part} />)}
    </div>
    
