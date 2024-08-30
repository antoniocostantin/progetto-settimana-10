import { Container, Row } from "react-bootstrap";
import WeatherCard from "./WeatherCard";

/* eslint-disable jsx-a11y/alt-text */


const Home = ({myFav}) => {
  return (
    <Container>
      <h4 className="my-4 text-black">My Favourite</h4>
        <Row xs={{cols:1}} sm={{cols:2}} md={{cols:3}} lg={{cols:4}} className="g-4">
          {myFav.map((location, i) => {
            return <WeatherCard location={location} key={i} />
          })}
        </Row>
      </Container>
  );
};
export default Home;
