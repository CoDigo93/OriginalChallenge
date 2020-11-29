import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ConfirmPurchase from './components/ConfirmPurchase'
import Home from './components/Home'
const Routes = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component = {Home} />
            <Route path='/confirm' component = {ConfirmPurchase} />
        </Switch>
    </BrowserRouter>

    )
}
export default Routes;