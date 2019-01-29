import React, {Component} from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {DASHBOARD_ROUTES} from "../dashboard-routes";
import uuidv4 from 'uuid/v4';

export default class SideNav extends Component {

    render() {
        return (
            <div className="side-nav">
                <Nav vertical>{
                    DASHBOARD_ROUTES.map(route => (
                        <NavItem key={uuidv4()}>
                            <NavLink to={route.path} activeClassName="active" tag={RouterNavLink}>
                                {route.title}
                            </NavLink>
                        </NavItem>
                    ))
                }</Nav>
            </div>
        );
    };

}