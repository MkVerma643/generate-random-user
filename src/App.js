import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Axios from "axios";
import MyCard from "./Card"

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const {data} = await Axios.get('https://randomuser.me/api/')
    
    const details = data.results[0];
    console.log("response:", details)

    setDetails(details);
  }

  useEffect(() => {
    fetchDetails()
  },[])

  return (
    <div className="App">
        <Container fluid className="p-4 bg-primary App">
          <Row>
            <Col md={4} className="offset-md-4 mt-4">
              <MyCard details={details} />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
