import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const MeteoHome = () => (
  <Container className="my-4">
    <Card bg="transparent" className="text-white border-1 border-white ">
      <Card.Header as="h3">Welcome</Card.Header>
      <Card.Body>
        <Card.Title as="h1">Meteo App 🌤️</Card.Title>
        <Card.Text>See the Weather in your city</Card.Text>
        <Button id="get-started-btn" variant="">
          Get Started
        </Button>
      </Card.Body>
    </Card>
  </Container>
);

export default MeteoHome;
