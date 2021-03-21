import React from 'react';

const Input = ({ type, value, setValue, className, placeholder, style, pattern }) =>
    <input type={ type || "text" } style={ { ...style } } value={ value } pattern={ pattern } required
           placeholder={ placeholder } className={ className }
           onChange={ e => setValue(e.target.value) } minLength={1}/>
export default Input;