import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div>
  );
}


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

    // toggleDrawer(){
    //   this.setState({
    //     anchor:"",
    //     state:""
    //   })
    // }
   
    
    

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
        <div>
          
          <SimpleList/>
        
          <ul>
            {items.results.map(item => (
              <li key={item.name}>
                <h3>{item.name}</h3> 
                <p>{item.formatted_address}</p> 
                <p>{item.geometry.location.lat}, {item.geometry.location.lng}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    }
}
