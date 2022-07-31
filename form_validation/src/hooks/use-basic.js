import { useState } from 'react';

const useBasic = (validateValue) => {
    const [enteredValue,setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState('');
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;
    
    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setIsTouched(false);
        setEnteredValue('');
    }

    return {
        value: enteredValue,
        isValid:valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    }
}

export default useBasic;