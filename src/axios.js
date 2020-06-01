import React from 'react';



export default class Axios extends React.Component
{

    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded: false,
            items: []
        }
    }


    

    componentDidMount() {
        const axios = require('axios').default;
        const API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;

        axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&query=ntuc`)
          .then(response => response.data)
          .then((data) => {
            console.log(data);
            this.setState({ 
                isLoaded: true,
                items: data 
            });
           },
           (error)=>{
               this.setState({
                isLoaded: true,
                error
            });
           }
           )
            
    }
 
    render()
    {   
        const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.results.map(item => (
            <li key={item.name}>
              {item.name}, {item.formatted_address} {item.geometry.location.lat}, {item.geometry.location.lng}
            </li>
          ))}
        </ul>
      );
    }
    }
}
