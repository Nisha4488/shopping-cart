import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'

const App = () => (
  <div>
    <CartHeader />
    <CartFooter year="2016"/>
    <CartItems/>
  </div>
)

export default App;
