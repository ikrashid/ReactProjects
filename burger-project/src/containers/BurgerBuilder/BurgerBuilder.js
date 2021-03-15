import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: .50,
    cheese: .40,
    meat: 1.0,
    bacon: .7
}
class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasing: false
    }

    currentlyPurchasing = () =>{
        this.setState({purchasing: true});
    }

    addIngredientHandler = (type) =>{
        let count = this.state.ingredients[type]+1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = count;
        const updatedCost = INGREDIENT_PRICES[type] + this.state.totalPrice;
        this.setState({ingredients: updatedIngredients, totalPrice: updatedCost})
    }
    removeIngredientHandler = (type) =>{
        let count = this.state.ingredients[type]-1;
        if(count >= 0){
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = count;
            const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
        }       
    }

    backdropHandler = () =>{
        this.setState({purchasing: false})
    }

    purchaseHandler = () =>{
        alert('yay');
    }
    
    render(){
        const disabledInfo = {...this.state.ingredients};
        for (let ing in disabledInfo){
            disabledInfo[ing] = disabledInfo[ing] <=0;
        }
        const purchasable = Object.values(this.state.ingredients).some((count)=> count > 0)
        // let orderSummary = "";

        // if(this.state.purchasing){
        //     orderSummary = <OrderSummary ingredientSummary={this.state.ingredients}/>;
        // }

        return(
            <Aux>
                <Modal closeBackdrop={this.backdropHandler} show={this.state.purchasing}>
                    <OrderSummary 
                        price = {this.state.totalPrice.toFixed(2)}
                        purchaseContinue={this.purchaseHandler} 
                        purchaseCancel={this.backdropHandler} 
                        ingredientSummary={this.state.ingredients}/>
                </Modal>
                    <Burger ingredients ={this.state.ingredients}/>
                    <BuildControls purchasing={this.currentlyPurchasing} disabledInfo={disabledInfo} 
                        removeIngredient ={this.removeIngredientHandler} 
                        addIngredient={this.addIngredientHandler}
                        burgerPrice = {this.state.totalPrice}
                        purchasable= {purchasable}>                   
                    </BuildControls>
            </Aux>
        )
    }
}

export default BurgerBuilder;