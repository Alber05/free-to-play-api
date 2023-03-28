import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/freetogame-logo.png";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

const freeGames = [
  {
    category: "MMORPG",
    url: "mmorpg",
  },
  {
    category: "Shooter",
    url: "shooter",
  },
  {
    category: "MOBA",
    url: "moba",
  },
  {
    category: "Anime",
    url: "anime",
  },
  {
    category: "Battle Royale",
    url: "battle-royale",
  },
  {
    category: "Strategy",
    url: "strategy",
  },
  {
    category: "Fantasy",
    url: "fantasy",
  },
  {
    category: "Sci-Fi",
    url: "sci-fi",
  },
  {
    category: "Card Games",
    url: "card",
  },
  {
    category: "Racing",
    url: "racing",
  },
  {
    category: "Fighting",
    url: "fighting",
  },
  {
    category: "Social",
    url: "social",
  },
  {
    category: "Sports",
    url: "sports",
  },
];

const browserGames = [
  {
    category: "MMORPG",
    url: "mmorpg",
  },
  {
    category: "Shooter",
    url: "shooter",
  },
  {
    category: "Anime",
    url: "anime",
  },
  {
    category: "Strategy",
    url: "strategy",
  },
  {
    category: "Fantasy",
    url: "fantasy",
  },
  {
    category: "Sci-Fi",
    url: "sci-fi",
  },
  {
    category: "Social",
    url: "social",
  },
  {
    category: "Sports",
    url: "sports",
  },
];

function Navegador() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Free Games" id="free-games-dropdown">
              {freeGames.map((category, index) => (
                <LinkContainer key={index} to={`/games/${category.url}`}>
                  <NavDropdown.Item>{category.category}</NavDropdown.Item>
                </LinkContainer>
              ))}
            </NavDropdown>
            <NavDropdown title="Browser Games" id="browser-games-dropdown">
              {browserGames.map((category, index) => (
                <LinkContainer key={index} to={`/browser/${category.url}`}>
                  <NavDropdown.Item>
                    Browser {category.category}
                  </NavDropdown.Item>
                </LinkContainer>
              ))}
            </NavDropdown>

            <LinkContainer className="nav-item" to="/search">
              <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;
