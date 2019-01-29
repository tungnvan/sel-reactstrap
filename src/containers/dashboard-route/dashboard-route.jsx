import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import SideNav from "./layout/side-nav";
import TopNav from "./layout/top-nav";
import {DASHBOARD_ROUTES} from "./dashboard-routes";

export default class DashboardRoute extends Component {

    render() {
        return (
            <div className="dashboard">
                <TopNav />
                <div className="below-top-nav d-flex flex-row">
                    <SideNav />
                    <div className="content-wrapper flex-grow-1">
                        <div className="content">
                            <Switch>{
                                DASHBOARD_ROUTES.map(route => (
                                    <Route key={route.path} path={route.path} exact={route.exact} render={(props) => (
                                        <route.component {...props} />
                                    )} />
                                ))
                            }</Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}