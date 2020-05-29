import React from 'react';
import './Section1.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function clickedEvent(){
    alert("hello there")
}

function tickEvent(){
    
}

function Section1(){
    return(
        <div className="Section1">
            <h1>This is a test</h1>
            <Button variant="contained" color="primary" onClick={clickedEvent}>
            Hello World
            </Button>
            <label>Checkbox</label>
            <input type="checkbox" onClick={tickEvent}>
            </input>
        </div>
    );
}

export default Section1;