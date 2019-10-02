import React from 'react';
import {MyInfo} from '../My-info/My-info.jsx'

export const About = (props) =>
    <div className="About">
        <MyInfo title={props.title} content={props.content} />
    </div>  
    