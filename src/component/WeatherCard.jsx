/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";

const key = "0d42fedfedaad315a3fe4270a91c0d00";

const WeatherCard = ({ location }) => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [icon, setIcon] = useState('')

  const fetchWeather = async (locality) => {
    setIsLoading(true);
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locality},It&lang=it&appid=${key}`
      );
      if (response.ok) {
        let weather = await response.json();
        console.log(weather);
        setWeather(weather);
        setIcon("http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png")
        setIsLoading(false);
        setIsError(false);
      } else {
        console.log("error");
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchWeather(location);
  }, []);

  return (
    <>
      <Col>
        <Card
          bg='dark'
          key='Dark'
          text="white"
          className="mb-2"
        >
          <Card.Header className="text-capitalize"><img src={icon} alt="icon" className="iconw" /> {weather.weather[0].description}</Card.Header>
          <Card.Body>
            <Card.Title> {weather.name} </Card.Title>
            <Card.Text>
              {Math.floor(weather.main.temp_min - 273.15)}°C -- {Math.floor(weather.main.temp_min - 273.15)}°C <br/>
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default WeatherCard;
