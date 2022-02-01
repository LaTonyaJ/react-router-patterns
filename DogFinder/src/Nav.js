import React from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom';

function Nav(props){
    return(
        <nav className='dog-nav'>
            {props.dogs.map((dog, i) =>
            <li key={i}>
                <NavLink to={`dogs/${dog.name}`}>
                    {dog.name}
                </NavLink>
            </li>
            )};
        </nav>
    );
}

export default Nav;