import React from 'react';
import './Section1.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';


export default class Section1 extends React.Component
{

    constructor(props){
        super(props);
        this.state={
            tickBox: false,
        };
        this.onTickEvent = this.onTickEvent.bind(this);
    }
    
    onTickEvent(event){
        const target = event.target;
        const value = target.name === 'tickBox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
        console.log("hey there" + this.state.tickBox);
    }
 
    render()
    {
        return(
        <div className="Section1">
            <h1>This is a test</h1>
            <Button variant="contained" color="primary">
            Hello World
            </Button>
            <label>Checkbox</label>
            <input type="checkbox" name="tickBox" checked={this.state.tickBox} onChange={this.onTickEvent} >
            </input>
        </div>
        )
    }
}
