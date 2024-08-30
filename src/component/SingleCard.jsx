import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap"


const SingleCard = ({w}) => { 
    const [icon, setIcon] = useState("");


    useEffect(()=> {
        setIcon(
            "http://openweathermap.org/img/w/" + w.weather[0].icon + ".png"
          );
    }, [])
    
    useEffect(()=> {
        setIcon(
            "http://openweathermap.org/img/w/" + w.weather[0].icon + ".png"
          );
    }, [w])
    return (
        <Col>
        <Card bg="dark" key="Dark" text="white" className="mb-2">
          <Card.Header className="text-capitalize">
            <img src={icon} alt="icon" className="iconw" /> {w.weather[0].description}
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <i className="bi bi-thermometer-low"></i>
              {w.main.temp_min}°C -- <i className="bi bi-thermometer-high"></i>
              {w.main.temp_min}°C <br />
              <i className="bi bi-water"></i> {w.main.humidity} % <br />
              <i className="bi bi-wind"></i> {w.wind.speed} <small>m/s</small> -- {w.wind.deg} <small>deg</small><hr/>
              <small >{w.dt_txt.replaceAll('-', '/').slice(0,10)} --- <i className="bi bi-stopwatch-fill">  at </i>{w.dt_txt.slice(12,13)} </small>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

    )
}

export default SingleCard