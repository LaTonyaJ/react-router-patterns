import React from 'react';
import {Link} from 'react-router-dom';
import NewColorForm from './NewColorForm';
import ColorList from './ColorList';
import './Color.css';

function Color({colors}) {
    return(
        <>
        <div className='colorFac' >
            <h2>Welcome to the Color Factory!</h2>
            <Link to='/color/new'>Add a Color</Link>
        </div>
            <ColorList colors={colors}/>
        </>
    );
}

export default Color;