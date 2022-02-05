import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Colored.css';

function Colored({name, hex}){

    return(
        <>
        <h1>How's about that {name}!</h1>
        <div 
        style={{backgroundColor: hex}}
        className='color'
        >
            <Link to={`/colors`}><b>Home</b></Link>
        </div>
        </>
    );
}

export default Colored;