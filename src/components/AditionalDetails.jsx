import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function AditionalDetails({ details }) {
  return (
    <Container
      style={{
        marginBottom: "40px",
        margin: "0 auto",
      }}
    >
      <h2>Additional Information</h2>
      <Row>
        <Col style={{ padding: "10px" }}>
          Title
          <br />
          {details?.title}
        </Col>
        <Col style={{ padding: "10px" }}>
          Dreveloper
          <br />
          {details?.developer}
        </Col>
        <Col style={{ padding: "10px" }}>
          Publisher
          <br />
          {details?.publisher}
        </Col>
      </Row>
      <Row>
        <Col style={{ padding: "10px" }}>
          Release Date
          <br />
          {details?.release_date}
        </Col>
        <Col style={{ padding: "10px" }}>
          Genre
          <br />
          {details?.genre}
        </Col>
        <Col style={{ padding: "10px" }}>
          Platform
          <br />
          {details?.platform}
        </Col>
      </Row>
    </Container>
  );
}
