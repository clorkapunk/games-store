import React from 'react';
import {Col, Container, ListGroup, Row} from "react-bootstrap";

const Profile = () => {
    return (
        <Container style={{minHeight: "100vh"}}>
            <Row className="d-flex justify-content-between">
                <Col md={3} style={{background: 'white', padding: 0}}>
                    <ListGroup style={{background: 'transparent', width: '100%'}}>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9} style={{background: 'grey'}}>

                </Col>

            </Row>

        </Container>
    );
};

export default Profile;