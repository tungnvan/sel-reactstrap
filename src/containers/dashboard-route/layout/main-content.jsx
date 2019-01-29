import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class MainContent extends Component {

    render() {
        return (
            <Fragment>
                <h2>{this.props.title}</h2>
                <div className="main-content">{this.props.children}</div>
            </Fragment>
        );
    };

}

MainContent.propTypes = {
    title: PropTypes.string,
};