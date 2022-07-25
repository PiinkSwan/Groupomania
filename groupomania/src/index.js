import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profil from './user/pages/Profil'
import User from './user'
import Header from './components/Header/index'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Profil />
                </Route>
                <Route path='/user'>
                    <User />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,

)