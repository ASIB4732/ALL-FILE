import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import { UserId } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [users,setUser] = useContext(UserId);
    // console.log(users.email);
    const data = JSON.parse(localStorage.getItem('data'));
    // users.email ||
    return (
        <Route
            {...rest}
            render={({ location }) =>
            ( data && data.email) ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/logIn",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;