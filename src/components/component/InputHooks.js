import React, { useState } from 'react';

const InputHook = val => {
    const [state, setState] = useState(val);

    const inputField = e => {
       setState(e.target.value) 
    };

    const clear = () => {
        setState("")
    };

    return [state, inputField, clear];
}

export default InputHook;