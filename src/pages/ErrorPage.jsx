import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleHomeRedirect = () => {
        navigate('/');
    };

    return (
        <Container fluid style={{ height: '50vh' }} className=" d-flex align-items-center justify-content-center bg-light">
            <Row className="text-center">
                <Col>
                    <h1 className="display-3 text-cookit text-danger">Oops!</h1>
                    <h3 className="mb-3 text-cookit">We couldn't find the recipe you were looking for.</h3>
                    <p className="text-muted mb-4 text-cookit">
                        It seems the recipe you're trying to access doesn't exist, or there was an error loading it.
                    </p>
                    <Button  onClick={handleHomeRedirect} className="me-2 btn-hero position-relative bg-transparent ">
                        Go to Homepage
                    </Button>
                    <Button className="btn-hero position-relative bg-transparent" onClick={() => window.location.reload()}>
                        Try Again
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorPage;
