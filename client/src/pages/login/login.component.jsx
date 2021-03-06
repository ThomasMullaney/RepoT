// put together our login components (similar to signup)
import React, { Component } from "react";
import "./login.style.css";
import { Row, Col, Container } from "reactstrap";
import { FormBtn } from "../../Components/Form/form.component";


class Login extends Component {
    
    loginPath = (process.env.NODE_ENV === 'production') ? 'https://deadstock2.herokuapp.com/oauth/google' : 'http://localhost:3001/oauth/google';

    render() {
        return (
            <Container fluid >
                <Row fluid >
                    <Col sm="3" className="text-center mx-auto" >
                        <h1 style={{
                            textAlign: "center",
                            paddingTop: "12%"
                        }}>Login:</h1>
                        {/* <form style={{ textAlign: "center" }}>
                            <Input
                                style={{ textAlign: "left" }}
                                name="username"
                                placeholder="username"
                            />
                            <Input
                                style={{ textAlign: "left" }}
                                name="password"
                                placeholder="password"
                            />
                            <FormBtn
                                className="btn btn-success"
                                style={{ marginLeft: "auto" }}
                            >
                            <strong>Login</strong>
                            </FormBtn> */}
                            <a className="nav-link" as='a' href={this.loginPath}>
                                <FormBtn type="button" className="btn btn-google" >
                                    <strong>Google+</strong>
                                </FormBtn>
                            </a>
                        {/* </form> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Login;