/* eslint-disable react-hooks/exhaustive-deps */
import { Alert } from "bootstrap";
import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const key = "0d42fedfedaad315a3fe4270a91c0d00";

const WeatherCard = ({ location }) => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [icon, setIcon] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [desc, setDesc] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [windd, setWindd] = useState(0);

  const navigate = useNavigate()
  const naviga = (city) => {
    navigate('/details/' + city)
  }


  const fetchWeather = async (locality) => {
    setIsLoading(true);
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locality}&units=metric&appid=${key}`
      );
      if (response.ok) {
        let weather = await response.json();
        console.log(weather);
        setWeather(weather);
        setIcon(
          "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"
        );
        setMin(weather.main.temp_min);
        setMax(weather.main.temp_max);
        setDesc(weather.weather[0].description);
        setHumidity(weather.main.humidity);
        setWind(weather.wind.speed);
        setWindd(weather.wind.deg);
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

  useEffect(() => {}, [location]);

  return (
    <>
      {isError && <Alert />}
      {isLoading ? (
        <Spinner variant="dark" />
      ) : (
        <Col>
          <Card bg="dark" key="Dark" text="white" className="mb-2" onClick={()=>{naviga(weather.name)}}>
            <Card.Header className="text-capitalize">
              <img src={icon} alt="icon" className="iconw" /> {desc}
            </Card.Header>
            <Card.Body>
              <Card.Title> {weather.name} </Card.Title>
              <Card.Text>
                <i className="bi bi-thermometer-low"></i>
                {min}°C -- <i className="bi bi-thermometer-high"></i>
                {max}°C <br />
                <i className="bi bi-water"></i> {humidity} % <br />
                <i className="bi bi-wind"></i> {wind} <small>m/s</small> --{" "}
                {windd} <small>deg</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};
export default WeatherCard;
