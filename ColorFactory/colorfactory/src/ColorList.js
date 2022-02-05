import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './ColorList.css';

function ColorList({colors}){
    return(
        <div>
            <h2 className='colorHead'>ThE CoLoR LiST</h2>
            <ul className='colorList'>
                {Object.keys(colors).map(c => 
                    <li key={c}>
                        <Link 
                        to={`/color/${c}`}
                        >
                        {c.toLowerCase()}
                        </Link>
                    </li>)};
            </ul>
        </div>    
    );
}

export default ColorList;