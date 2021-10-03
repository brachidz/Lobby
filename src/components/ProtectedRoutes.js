import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import configData from './config.json'
import { useSelector } from "react-redux"
import keys from '../config/env/keys';

function redirectToLogin(routes) {
    window.location.href = keys.LOGIN_URL;
    // `https://accounts.codes/lobby/login`;
    return null
}
const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    // const ProtectedRoute = ({ component: Component }) => {
    const Data = useSelector(state => state.staticDetailsReducer)
    const TokenToString = Data.jwt
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    debugger
    let userName = rest.computedMatch.params.userName;//not recived rest from props
    // let url = window.location;
    // let userName = (url.pathname.split('/')[1]);
    // let userName = window.location.pathname.split('/')[1];
    useEffect(() => {
        const isLocal = window.location.hostname == "localhost"
        const url = `${configData.BASE_URL}${userName}/isPermission?isLocal=${isLocal}`;
        const isPermission = async () => {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: TokenToString,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            if (response.status == 401) {
                setIsLoading(false)
                setIsLoggedIn(true)
            }
            else {
                setIsLoading(false)
            }
        }
        isPermission()
    }, [])

    return isLoading ? null : isLoggedIn ?
        redirectToLogin()
        : <Route render={props => { return <Component {...rest} {...props} /> }} />
}
export default ProtectedRoute
