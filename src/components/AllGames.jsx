import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import BreadcrumbExample from "./Breadcrum";
import { getData } from "./funciones";
import { Container, Spinner, Row, Col, Pagination } from "react-bootstrap";

const options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  headers: {
    "X-RapidAPI-Key": "d09c5dd645msh12006d8f1a9e368p176141jsn4bc5a07d7f01",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export default function AllGames() {
  const [allGames, setAllGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(12);

  useEffect(() => {
    getData(setAllGames, options, setIsLoading);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allGames.length / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Container as="main">
        {isLoading ? (
          <Row className="">
            <Col className="d-flex align-items-center justify-content-center gap-4 min-vh-100">
              <Spinner
                style={{ height: "100px", width: "100px", color: "#AAAAAA" }}
              ></Spinner>
            </Col>
          </Row>
        ) : (
          <>
            <Row style={{ padding: "40px 0 0px 0" }}>
              <Col className="col-12">
                <BreadcrumbExample category="Todos los juegos" />
              </Col>
            </Row>
            <Row>
              {currentGames.map((game, index) => (
                <Col key={index} className="col-xl-3 col-md-4 mb-4">
                  <GameCard game={game}></GameCard>
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Pagination>
                  {pageNumbers.map((number) => (
                    <Pagination.Item
                      key={number}
                      active={number === currentPage}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
}
