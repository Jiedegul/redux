import React from 'react';
import { connect } from "react-redux"
import {addCount,minusCount,multiplayCount,devideCount } from "../action"



const App = ({ count, addCount,minusCount,multiplayCount,devideCount}) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addCount}> + </button>
            <button onClick={minusCount}>-</button>
            <button onClick={multiplayCount}> *2 </button>
            <button onClick={devideCount}>/2</button>
        
        </div>
    );
};

const msp = ({count}) => {
    return { count }
}

export default connect(
    msp,{addCount,minusCount,multiplayCount,devideCount })


    (App);