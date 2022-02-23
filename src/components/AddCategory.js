import React, { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = e => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Submit hecho");
        if(inputValue.length > 2){
          setCategories(categories => [inputValue, ...categories ]);
          setInputValue('');
        }
    }
  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputValue }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: propTypes.func.isRequired
}
