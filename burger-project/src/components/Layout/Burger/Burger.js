import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css'

const burger = (props) =>{
    let transformedIngredients = Object.keys(props.ingredients)
                                .map(igKey=> {
                                    return [...Array(props.ingredients[igKey])].map((_,ind)=>{
                                       return <BurgerIngredient type={igKey} key={igKey + ind}/>
                                    })
                                }).reduce((prevElem, curr) => {return prevElem.concat(curr)}, []);   
    
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please begin building a burger!</p>
    }                      
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )

}

export default burger;