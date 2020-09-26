import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, useParams, withRouter, Redirect } from 'react-router-dom';
import Resto from './Restaurant';
import './style.css';

class Menu extends Component {

    render() {
        return <>
            <Router>
                <table class="table table-striped Menu">
                    <thead>
                        <tr>
                            <th>Restaurant</th>
                            <th>Star Rating</th>
                            <th>Nearby</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><NavLink to="/bbq">Barbeque Nation</NavLink></td>
                            <td className="rating"> * * * * *</td>
                            <td>5 Km</td>
                        </tr>
                        <tr>
                            <td><NavLink to="/kfc">KFC</NavLink></td>
                            <td className="rating">* * *</td>
                            <td>2 Km</td>
                        </tr>
                        <tr>
                            <td><NavLink to="/dominos">Dominos</NavLink></td>
                            <td className="rating">* *  * *</td>
                            <td>7 Km</td>
                        </tr>
                    </tbody>

                </table>
                <Switch>
                    <Redirect from='/home' to="/" />
                    <Route path="/bbq" render={() => <Resto RestoName="Barbeque" cuisine="Tandoor" address="Nagar ,Nilgiri Road ,Hill" />} />
                    <Route path="/kfc" render={() => <Resto RestoName="kfc" cuisine="Chicken Fried" address="Kapil Nagar ,Supela, Durg" />} />
                    <Route path="/dominos" render={() => <Resto RestoName="dominos" cuisine="Italian" address="Adarsh Nagar , Durg" />} />
                </Switch>
            </Router>
        </>
    }
}
export default Menu;