import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Startups from "./pages/Startups"

function Router() {
    return (
        <div>
            <BrowserRouter>
                {/* <Navbar/> */}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Register" component={Register}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Startup" component={Startups}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
