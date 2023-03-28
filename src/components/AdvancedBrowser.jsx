import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FiltersForm from "./FiltersForm";

export default function AdvancedBrowser() {
  return (
    <Container
      style={{
        color: "#AAAAAA",
      }}
    >
      <Row>
        <Col className="col-12">
          <h1 variant="dark">Advanced Game Search</h1>
        </Col>
      </Row>
      <Row>
        <Col as="aside" className="col-12 col-md-3">
          <FiltersForm></FiltersForm>
        </Col>
        <Col as="main" className="col-12 col-md-9"></Col>
      </Row>
    </Container>
  );
}
