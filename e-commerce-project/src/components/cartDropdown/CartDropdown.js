import React from 'react';
import CustomButton from '../customButton/CustomButton';
import './CartDropdown.scss';
import CartItem from '../cartItem/CartItem';
import {connect} from 'react-redux';

const Cart = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = (state) =>({
    cartItems: state.cart.cartItems
})
export default connect(mapStateToProps)(Cart);