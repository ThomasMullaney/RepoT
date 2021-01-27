import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Vinyl from "../../assets/main/vinyl.png";
import "./main.component.style.css";

function Main() {
    return (
        <div id="Main">
            <div className="main">
            <h1 className="pt-3 text-center title pb-3">Spin it</h1>
            <Container>
            
                        <Row className="justify-content-center mb-2 mr-2">
                            <Image
                                className="profile justify-content-end"
                                alt="vinyl"
                                src={Vinyl}
                                thumbnail fluid
                                />
                        </Row>
                    
                        <Row className="justify-content-center">
                            <Button className="m-2">
                                     Push Me
                            </Button>                
                        </Row>
                    
                
            </Container>
            </div>
        </div>
    );
}

export default Main;