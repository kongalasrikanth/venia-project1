import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {

    const {cart} = value;

    return (
    <div className="page_container">
        {cart.map(item => (
        <CartItem key={item.id} item={item} value={value} />
        ))}
    </div>
    );
}
