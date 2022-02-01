import React from 'react';
import {Link} from 'react-router-dom';
import './DogList.css';

function DogList({dogs}){
    return(
        <div>
            <h1>Dog List 🐶</h1>
            <ul>
                {dogs.map((dog, i) => 
                <li key={i}>
                    <img src={dog.src} alt={dog.name}/>
                    <h2>
                        <Link to={`/dogs/${dog.name}`}>
                            {dog.name}
                        </Link>
                    </h2>
                </li>)}
            </ul>
        </div>
    )
}

export default DogList;