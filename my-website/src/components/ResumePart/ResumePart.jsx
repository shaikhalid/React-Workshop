import React from 'react';
import './ResumePart.css'
import { Table } from "react-bootstrap";


export const ResumePart = (props) => 
    <div className="ResumePart ">
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>{props.title}</th>
                </tr>
            </thead>
            <tbody>
                {props.part.map(ele => <tr>{ele}</tr>)}
            </tbody>
        </Table>
        
    </div>