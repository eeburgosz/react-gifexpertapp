import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handlerInputChange= (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const handlerSubmit= (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 1){
            setCategories(cats=> [inputValue, ...cats]);
            setInputValue('');
        }   

        
        //console.log('Submit hecho')
    }    

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handlerInputChange}></input>
                </form>
        </div>
    )
}
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
