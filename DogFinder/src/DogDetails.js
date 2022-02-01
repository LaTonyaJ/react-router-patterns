import React from "react";
import { useParams, Link } from "react-router-dom";

function DogDetails({dogs}){
    const {name} = useParams();

    if(name){
    const d = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
    return(
        <div>
            <h1>Hi! I'm {d.name}</h1>
            <img src={d.src} alt={d.name} />
            <p>{d.name} is {d.age} years old.</p>
            <h4>Fun Facts...</h4>
            <ul>
                {d.facts.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>
            <Link to='/dogs'>Home 🏠</Link>
        </div>
        );
    }
    return null;
}

export default DogDetails;