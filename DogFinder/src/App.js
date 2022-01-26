import './App.css';
// import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

import whiskey from './dogs/whiskey.jpg';
import duke from './dogs/duke.jpg';
import tubby from './dogs/tubby.jpg';
import perry from './dogs/perry.jpg';


function App(props) {
  return (
    <div className="App">
    {/* <Nav name={props.dogs.name}/> */}
    <BrowserRouter>
    <Switch>
      <Route exact path="/dogs" >
        <ErrorBoundary>
          <DogList dogs={props.dogs}/>
        </ErrorBoundary>
      </Route>
      <Route path="/dogs/:name" >
        <ErrorBoundary>
          <DogDetails dogs={props.dogs} />
        </ErrorBoundary> 
      </Route> 
      <Redirect to="/dogs" />
    </Switch>
    </BrowserRouter>
  
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};

export default App;
