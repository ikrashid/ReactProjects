import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

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
            <h4>Total Price: {props.price}</h4>
            <p>Continue to checkout?</p>
            <Button click={props.purchaseCancel} btnType='Danger'>CANCEL</Button>
            <Button click={props.purchaseContinue} btnType='Success'>CONTINUE</Button>
        </Aux>
    )
}


export default orderSummary;