import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "./funciones";
import { Container, Spinner, Image, Modal } from "react-bootstrap";
import RequisitosMinimos from "./RequisitosMinimos";
import AditionalDetails from "./AditionalDetails";

export default function GameDetails() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState("");

  const { id } = useParams();

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": "d09c5dd645msh12006d8f1a9e368p176141jsn4bc5a07d7f01",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    getData(setDetails, options, setIsLoading);
    console.log(details);
  }, []);

  const handleScreenshotClick = (screenshot) => {
    setSelectedScreenshot(screenshot);
    setModalShow(true);
  };

  return (
    <Container
      as="main"
      className="d-flex flex-column align-items-center gap-4"
      style={{
        color: "#AAAAAA",
      }}
    >
      {isLoading ? (
        <Container className="d-flex align-items-center justify-content-center min-vh-100 gap-4">
          <Spinner style={{ height: "100px", width: "100px" }} />
        </Container>
      ) : (
        <>
          <h1 style={{ marginTop: "40px" }} variant="dark">
            {details.title}
          </h1>
          <Container className="d-flex justify-content-center flex-wrap gap-4">
            {details.screenshots?.map((screenShot, index) => (
              <Image
                key={index}
                src={screenShot?.image}
                style={{ maxWidth: "300px", cursor: "pointer" }}
                rounded
                onClick={() => handleScreenshotClick(screenShot?.image)}
              />
            ))}
          </Container>

          <Container>
            <h2>About {details.title}</h2>
            <p style={{ textAlign: "justify" }}>{details.description}</p>
          </Container>

          {details.minimum_system_requirements && (
            <RequisitosMinimos
              details={details.minimum_system_requirements}
            ></RequisitosMinimos>
          )}
          <AditionalDetails details={details} />
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="xl"
            centered
          >
            <Modal.Body>
              <Image src={selectedScreenshot} style={{ width: "100%" }} fluid />
            </Modal.Body>
          </Modal>
        </>
      )}
    </Container>
  );
}
