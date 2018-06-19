import React from 'react';
import CartItem from './CartItem'

const CartItems = ({cartItems}) => {
  console.log(cartItems);
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
          {cartItems.map(cartItem => <CartItem key={ cartItem.id } cartItem={ cartItem } />)}
      </div>
   </div>
  )
}

export default CartItems;
