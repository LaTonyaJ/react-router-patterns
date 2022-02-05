import React, { useState } from 'react';
import Color from './Color';
import Colored from './Colored';
import NewColorForm from './NewColorForm';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

function Routes(){
    const [colors, setColors] = useState({
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    });

    const handleAdd = (newColor) => {
        setColors(color => ({...color, ...newColor}));
    };

    const currentColor = (props) => {
        const {color} = props.match.params;
        const hex = colors[color];
        return <Colored name={color} hex={hex}/>;
    };

    return(
        <Switch>
            <Route exact path='/color'>
                <Color colors={colors}/>
            </Route>
            <Route exact path='/color/new'>
                <NewColorForm addColor={handleAdd}/>
            </Route>
            <Route path='/color/:color' render={currentColor}>
            </Route>
            <Redirect to='/color'/>
        </Switch>
    );
}

export default Routes;