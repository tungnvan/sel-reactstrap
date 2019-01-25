import React, {Component} from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class SideNav extends Component {

    render() {
        return (
            <div className="docs-sidebar mb-3">
                <Nav vertical>
                    <NavItem>
                        <NavLink to="/dashboard/page-one" activeClassName="active" tag={RouterNavLink}>
                            Page One
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/dashboard/page-two" activeClassName="active" tag={RouterNavLink}>
                            Page Two
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/dashboard/page-three" activeClassName="active" tag={RouterNavLink}>
                            Page Three
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    };

}