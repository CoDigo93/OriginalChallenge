import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ConfirmPurchase from './components/ConfirmPurchase'
import Home from './components/Home'
import ShoppingCart from './components/ShoppingCart'

const Routes = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component = {Home} />
            <Route path='/confirm' component = {ConfirmPurchase} />
            <Route path='/shopping-cart' component= {ShoppingCart} />
        </Switch>
    </BrowserRouter>

    )
}
export default Routes;