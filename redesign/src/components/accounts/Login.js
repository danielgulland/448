import React from "react";
import {Form, Row, Container, Card, Button, CardDeck} from "react-bootstrap";
import "./AccountStyles.css";

const Login = () => {
  return (
    <main>
      <Container className="loginWrapper">
        <Form.Group>
            <CardDeck>
              <Card className="formCard">
                <Card.Body>
                  <Card.Title>Are You a New User?</Card.Title>
                  <Card.Subtitle className="SubTitle">
                    Create an account with us and you'll be able to:
                  </Card.Subtitle>
                    <ul className="BulletList">
                      <li>- Check out faster</li>
                      <li>- Save multiple shipping addresses</li>
                      <li>- Access your order history</li>
                      <li>- Track new orders</li>
                      <li>- And much more!</li>
                    </ul>
                </Card.Body>
                <Button href="/account/register">
                  Create A New Account
                </Button>
              </Card>
              <Card className="formCard">
                <Card.Body>
                  <Card.Title>Log into your account</Card.Title>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="hunter3787@gmail.com"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="password"></Form.Control>
                    </Form.Group>
                  </Form>
                  <Card.Text>Forgot your password? <a href="https://www.shirtpunch.com/account/login?return_url=%2Faccount">Reset Here</a></Card.Text>
                </Card.Body>
                <Button href="/account">
                  Login
                </Button>
              </Card>
            </CardDeck>
        </Form.Group>
      </Container>
    </main>
  );
};

export default Login;