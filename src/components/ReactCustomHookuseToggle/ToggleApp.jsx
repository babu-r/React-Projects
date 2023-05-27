import React from 'react';
import useToggle from './useToggle.jsx';

const ToggleApp = () => {
     const [isTextChanged, setIsTextChanged] = useToggle();
     return(
        <button id='button' onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
     );
}

export default ToggleApp;