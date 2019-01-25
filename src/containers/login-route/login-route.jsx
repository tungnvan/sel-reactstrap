import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
    Row, Col, Form, FormGroup, Label, Input, Button,
    Card, CardBody
} from 'reactstrap';

export default class LoginRoute extends Component {

    render() {
        return (
            <div className="login-page full-height">
                <Row>
                    <Col md={{size: 4, offset: 4}}>
                        <Card>
                            <CardBody>
                                <h2 className="text-center">Đăng nhập</h2>
                                <Form>
                                    <FormGroup>
                                        <Label for="email-input">Email</Label>
                                        <Input type="email" name="email" id="email-input" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password-input">Mật khẩu</Label>
                                        <Input type="password" name="password" id="password-input" />
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={{ size: 6, offset: 6 }} className="d-flex flex-row-reverse">
                                            <Link to="/dashboard"><Button color="primary">Đăng nhập</Button></Link>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    };

}