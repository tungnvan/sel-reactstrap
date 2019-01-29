import React from 'react';
import {FormGroup, Col, Button, Table} from 'reactstrap';
import MainContent from "../../layout/main-content";

export default function PageTwo() {
    return (
        <MainContent title="Page Two">
            <FormGroup row>
                <Col md={12}>
                    <Button color="primary">primary</Button>{' '}
                    <Button color="secondary">secondary</Button>{' '}
                    <Button color="success">success</Button>{' '}
                    <Button color="info">info</Button>{' '}
                    <Button color="warning">warning</Button>{' '}
                    <Button color="danger">danger</Button>{' '}
                    <Button color="link">link</Button>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={12}>
                    <Table bordered>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </FormGroup>
        </MainContent>
    );
};