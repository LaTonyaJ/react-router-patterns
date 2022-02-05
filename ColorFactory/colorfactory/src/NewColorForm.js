import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './colorForm.css';

function NewColorForm({addColor}){
    const [form, setForm] = useState({name:'', hex:"#ffffff"});
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        addColor({[form.name]: form.hex});
        history.push('/color');
    }

    const handleChange = (e) => {
        e.persist();
        setForm(color => ({...color, [e.target.name]:e.target.value}))

    }

    const {name, hex} = form;


    return(
        <div className='form'>
        <div className='colorForm'>
            <form id='form' onSubmit={handleSubmit} className='form-control'>
                <div>
                <label htmlFor='name' className='form-label'>
                    Color name
                </label>
                <br />
                    <input 
                        onChange={handleChange}
                        id='name'
                        value={name}
                        name='name'
                        className='form-control'
                    />
                </div>
                    <br />
                <div>    
                <label htmlFor='hex' className='form-label'>
                    Choose a color
                </label>
                <br />
                    <input 
                        className='form-control form-control-color'
                        type='color'
                        onChange={handleChange}
                        id='hex'
                        value={hex}
                        name='hex'
                    />
                </div>
                <br />
                <button onClick={handleSubmit}>Add!</button>
            </form>
        </div>
    </div>
    );
}

export default NewColorForm;