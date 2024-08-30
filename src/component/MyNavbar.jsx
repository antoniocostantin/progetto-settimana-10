import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function MyNavbar({changed}) {

    const navigate = useNavigate()

    const gohome = ()=>{
        navigate ('/')
    }

    const searchclick = (city) => {
      navigate('/details/' + city)
    }
    const [search, setSearch] = useState('')

  return (
    <Navbar expand="md" bg="black" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand className="text-white" href="#" onClick={()=>{gohome()}}>
          <img
            className="logo"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6HeG0ypG7PpLMEnPxLI-Q_kGe4f4htZ5fA&s"
          />{" "}
          MyWeather
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex"
          onSubmit={(e) => {
            e.preventDefault();
           searchclick(search)
           changed()
          }}>
            <Form.Control
              variant="dark"
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={(e)=> {
                setSearch(e.target.value)
              }}
              aria-label="Search"
            />
            <Button variant="outline-light" type="submit">
                
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
