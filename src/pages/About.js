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
              It pulls them from an API ether and shhows you your human resource power house. The Directory 
              is not made to be questioned but just to be utilised. The Directory is the most accurate you 
              will ever see around. Move over to the next page and see for yourself. Make sure to immerse 
              yourself in the magic of the React Spa. Please do enjoy your React tour of The Directory.
              <br/> 
              Reactfully Yours, <br/>
              The Directory
             
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
