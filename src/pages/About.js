import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://source.unsplash.com/Vr_yaCXzLP0/1600x900">
        <h1>Employee Directory</h1>
        <h2>The Directory for all your Employees</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To The Directory!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              This is the place to be. This Directory gives you all the Lego Employees of your company. 
              No questions asked, The Directory is the most accurate you will ever see around. Click onto the next 
              page and see for yourself. <br/> Please enjoy your React tour of The Directory. 
              From all of us, <br/> 
              Have a reactful day!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
