import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import City from "./City";

const MainMeteoSearch = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=6e0e2d26e8c50a7d7ac56b88a75631b2`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCity(data);
      } else {
        alert("Error fetching city data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeather = async () => {
    if (city && city.coord && city.coord.lat && city.coord.lon) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=6e0e2d26e8c50a7d7ac56b88a75631b2&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Weather data:", data); // Log per controllare i dati weather
          setWeather(data);
        } else {
          alert("Error fetching weather data");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="text-white">Search your City</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Milan, London, Rome, Tokyo..."
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          <div className="border border-warning rounded px-2 mt-2 d-flex align-items-center div-city">
            {city && weather ? (
              <City city={city} weather={weather} />
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default MainMeteoSearch;
