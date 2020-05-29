import React from 'react';



export default class Axios extends React.Component
{

    constructor(props){
        super(props);
        
    }


    

    componentDidMount() {
        const axios = require('axios').default;
        
        axios.get('http://localhost:3333/items')
          .then(response => this.setState({items: response.data}))
          .catch(err => console.log(err))
    }
 
    render()
    {
        return(
        <div className="axios">
            <h1>This is an axios</h1>
            
        </div>
        )
    }
}
