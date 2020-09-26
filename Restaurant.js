import React, { Component, useState } from 'react';
import { Route, Link, NavLink, Switch, useParams, withRouter, Redirect, useRouteMatch } from 'react-router-dom';


const Resto = (props) => {
    const { path, url } = useRouteMatch();

    return <>
        <div className="title">{props.RestoName.toUpperCase()}</div>
        <ul>
            <li><NavLink to={`${url}/address`}>Address</NavLink></li>
            <li><NavLink to={`${url}/cuisine`}>Cuisine</NavLink></li>
        </ul>
        <Switch>
            <Route exact path={path}>
                <hr />
            </Route>
            <Route path={`${path}/:params`}>
                <Child props={props} />
            </Route>
        </Switch>
    </>

}
export default withRouter(Resto);

const Child = (props) => {
    let { params } = useParams();

    return (<>
        <table border="1" class="table ">
            <thead>
                <tr>
                    <th>{params.toUpperCase()}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.props[params]}</td>
                </tr>
            </tbody>
        </table>
    </>);
}