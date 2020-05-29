import React from 'react';
import './Section1.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function clickedEvent(){
    alert("hello there")
}


function Section1(){
    return(
        <div className="Section1" onClick={clickedEvent}>
            <h1>This is a test</h1>
            <Button variant="contained" color="primary">
            Hello World
            </Button>
        </div>
    );
}

export default Section1;