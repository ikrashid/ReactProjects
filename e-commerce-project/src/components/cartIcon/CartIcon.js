import React from 'react';
import './CartIcon.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-action';

const CartIcon = ({toggleCartHidden}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);

// click the icon, toggleCartHidden is dispatched since its mapped to the prop, this is an action in cart-action 
// then the reducer is going to go through its switch cases and update the state as necessary