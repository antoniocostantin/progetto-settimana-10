/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container, Row, Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SingleCard from "./SingleCard";
const key = "0d42fedfedaad315a3fe4270a91c0d00";

const CityDetails = ({ changep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [weather, setWeather] = useState({});
  const [weekWeather, setWeekWeather] = useState([]);
  const params = useParams();

  const fetchCity = async (locality) => {
    setIsLoading(true);
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${locality}&units=metric&appid=${key}`
      );
      if (response.ok) {
        let weather = await response.json();
        console.log(weather);
        setWeather(weather);
        setWeekWeather(weather.list);
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
    const city = params.city;
    console.log(city);
    fetchCity(city);
  }, []);

  useEffect(() => {
    const city = params.city;
    console.log(city);
    fetchCity(city);
  }, [changep]);

  return (
    <>
      {isLoading && (
        <Spinner
          animation="border"
          variant="danger"
          className="m-5 display-3"
        />
      )}
      {isError && (
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Something went wrong</p>
        </Alert>
      )}
      {weather.city && (
        <Container>
          <h4 className="my-4 text-black"> {weather.city.name} </h4>
          <Row
            xs={{ cols: 2 }}
            md={{ cols: 3 }}
            lg={{ cols: 4 }}
            className="g-4"
          >
            {weekWeather.map((dayweather, i) => {
              return <SingleCard key={i} w={dayweather} />;
            })}
          </Row>
        </Container>
      )}
    </>
  );
};
export default CityDetails;
