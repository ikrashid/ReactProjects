import React from 'react';
import Aux from '../../../../hoc/Aux';

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredientSummary)
        .map((elem,ind) => {return <li key={ind}><span style={{textTransform: 'capitalize'}}>{elem}</span>: {props.ingredientSummary[elem]}</li>});
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
}


export default orderSummary;