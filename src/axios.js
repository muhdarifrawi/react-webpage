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
        console.log(this.state.items)
        for (const each in this.state.items){
            console.log(each);
        }

        // ideally this is not the best way to keep secrets. this is meant for dev stage only. 
        // people can use devtool to actually read youe .env files in React
        const API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
        console.log(API_KEY);

        return(
        <div className="axios">
            <h1>This is an axios</h1>
            <p>{this.state.items.name}</p>

            {console.log("i can log here too")}
            {console.log(this.state.items)}
            
        </div>
        )
    }
}
