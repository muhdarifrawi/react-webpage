import React from 'react';



export default class Axios extends React.Component
{

    constructor(props){
        super(props);
        this.state = {
            items:"",
        }
    }


    

    componentDidMount() {
        const axios = require('axios').default;

        axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
          .then(response => this.setState({items: response.data}))
          .catch(err => console.log(err))
    }
 
    render()
    {   

        return(
        <div className="axios">
            <h1>This is an axios</h1>
            <p>{this.state.items.name}</p>
            
            
        </div>
        )
    }
}
