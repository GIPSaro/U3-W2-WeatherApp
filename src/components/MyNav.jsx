import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => (
  <Navbar className="text-white Navbar">
    <Container fluid className="">
      <Navbar.Brand href="#" className="mb-3 text-white">
        Meteo
      </Navbar.Brand>
      <Nav className="ms-auto text-white "></Nav>
    </Container>
  </Navbar>
);

export default MyNav;
