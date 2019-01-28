import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import {Row, Col} from 'reactstrap';
import SideNav from "./layout/side-nav";
import TopNav from "./layout/top-nav";
import {DASHBOARD_ROUTES} from "./dashboard-routes";
import uuidv4 from 'uuid/v4';

export default class DashboardRoute extends Component {

    render() {
        return (
            <div className="full-body">
                <Row><Col md={12}><TopNav /></Col></Row>
                <div className="below-top-nav d-flex flex-row">
                    <div className="side-nav">
                        <SideNav />
                    </div>
                    <div className="content-wrapper flex-grow-1">
                        <div className="content">
                            <Switch>{
                                DASHBOARD_ROUTES.map(route => (
                                    <Route key={uuidv4()} path={route.path} exact={route.exact} render={(props) => (
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