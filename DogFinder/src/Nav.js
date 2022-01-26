import React from 'react';
import {NavLink} from 'react-router-dom';
import DogDetails from './DogDetails';

function Nav(){
    return(
        <nav>
            <NavLink to='/dogs/:name'>
            </NavLink>
        </nav>
    );
}

export default Nav;