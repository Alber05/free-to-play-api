import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import { Col, Row } from "react-bootstrap";

function GameCard({ game }) {
  const cardStyles = {
    backgroundColor: "#32383e",
    color: "#aaaaaa",
    transition: "transform 0.2s ease-in-out",
  };

  const cardHoverStyles = {
    transform: "scale(1.05)",
  };

  return (
    <Card
      style={cardStyles}
      className="shadow"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = cardHoverStyles.transform;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <Card.Img variant="top" src={game.thumbnail} />
      <Card.Body>
        <Card.Title
          className="overflow-hidden text-truncate text-nowrap"
          alt={game.title}
        >
          {game.title}
        </Card.Title>
        <Card.Text className="overflow-hidden text-truncate text-nowrap">
          {game.short_description}
        </Card.Text>
        <Row>
          <Col className="col-4 d-flex justify-content-start align-items-center">
            <FontAwesomeIcon icon={faStar} /> {/* Icono de estrella */}
          </Col>
          <Col className="col-8 d-flex justify-content-end align-items-center ">
            <Row className="">
              <Col className=" col-7">
                <span
                  className="badge bg-dark p-1"
                  style={{ color: "#AAAAAA" }}
                >
                  {game.genre}
                </span>
              </Col>
              <Col className="col-5">
                {game.platform === "PC (Windows)" ? (
                  <FontAwesomeIcon
                    icon={faWindows}
                    title="Avaible in Windows"
                  />
                ) : game.platform === "Web Browser" ? (
                  <FontAwesomeIcon icon={faGlobe} title="Avaible in Browser" />
                ) : game.platform === "PC (Windows), Web Browser" ? (
                  <Row>
                    <Col className="col-6">
                      <FontAwesomeIcon
                        icon={faWindows}
                        title="Avaible en Windows"
                      />
                    </Col>
                    <Col className="col-6">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        title="Avaible in Browser"
                      />
                    </Col>
                  </Row>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>

        <LinkContainer
          to={`/game-details/${game.title}/${game.id}`}
          className="w-50 my-4 mx-auto d-block "
          style={{ backgroundColor: "#272B30", color: "#AAAAAA" }}
        >
          <Button className="mb-1">Más detalles</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
