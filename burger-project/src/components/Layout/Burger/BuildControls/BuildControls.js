import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
 
const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ]
const buildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <h3>Current Price: {props.burgerPrice.toFixed(2)}</h3>
            {controls.map(elem=> <BuildControl 
                add={() => props.addIngredient(elem.type)} 
                remove={() => props.removeIngredient(elem.type)}
                isDisabled = {props.disabledInfo[elem.type]}
                key={elem.label} 
                label={elem.label}></BuildControl>)}
            <button onClick={() => props.purchasing()} disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;