import React, { useReducer, useState } from 'react';

const Readucer = () => {
    const initialState={count:0};
    const reducer=(state, action)=>{
        switch(action.type){
            case "INCERMENT":
                return {count: state.count +1};
                case "DECREMENT":
                    return {count: state.count -1}
                default :
                return state;
        }
    }
    const [count, setCount]=useState(0);
    const [state, dispatch]= useReducer(reducer, initialState)
    return (
        <div>
            <h1>This is Reducer count:- {state.count}</h1>
            <button onClick={()=>dispatch({type:"INCERMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        </div>
    );
};

export default Readucer;