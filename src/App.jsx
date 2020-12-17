import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./components/item";
import { Container, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Col md={3}></Col>
        <Col md={8}>
          <Item />
        </Col>
      </Container>
    </div>
  );
}

export default App;
