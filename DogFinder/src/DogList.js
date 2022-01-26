import React from 'react';
import {Link} from 'react-router-dom';
import './DogList.css';

function DogList(props){
    return(
        <div>
            <h1>Dog List 🐶</h1>
            <ul>
                {props.dogs.map((dog, i) => <li key={i}>
                    <img src={dog.src} alt={dog.name}/>
                    <h2>
                        <Link to={`/dogs/${dog.name}`}>
                            {dog.name}{ `(age${dog.age})`}
                        </Link>
                    </h2>
                </li>)}
            </ul>
        </div>
    )
}

export default DogList;