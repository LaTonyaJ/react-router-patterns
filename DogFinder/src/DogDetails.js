import React from "react";
import { useParams } from "react-router-dom";

function DogDetails(props){
    const {name} = useParams();
    console.log(name)

    if(name){
    const d = props.dogs.find(dog => dog.name === name);
    console.log(d)
    return(
        <div>
            <h1>{d.name}</h1>
            <img src={d.src} alt={d.name} />
            <p>{d.age} years old.</p>
            <ul>
                {d.facts.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>
        </div>
        );
    }
    return null;
}

export default DogDetails;