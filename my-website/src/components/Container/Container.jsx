import React from 'react';
import './Container.css'
import {About} from'../About/About.jsx'

export const Container = (props) => 
    <div >
        <About className="Container" title={props.title} content={props.content}/>
    </div>
 