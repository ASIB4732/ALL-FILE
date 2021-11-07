import React, { useReducer, useRef } from 'react';
import { patientReduser, patientState } from '../Reducers/PatientReducer';

const PatientManagnemt = () => {
    const nameRef=useRef();
    const [state, dispatch]=useReducer(patientReduser, patientState);
    const handelSubmit=e=>{
        e.preventDefault();
        dispatch({
            type:"ADD-PATIENt",
            name: nameRef.current.value,
            id: state.patients.length +1 
        })
        console.log(nameRef.current.value);
    }
    return (
        <div>
            <h1>Patient Managnemt {state.patients.length}</h1>
            <form onSubmit={handelSubmit}>
                <input ref={nameRef}/>
            </form>
        </div>
    );
};

export default PatientManagnemt;