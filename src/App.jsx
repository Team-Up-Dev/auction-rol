import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./components/item";
import { Container, Card } from "react-bootstrap";
import FormPost from "./components/form";

const dummyData = [
  {
    category:"longsword",
    type:"cards",
    level:61,
    title:"Eclipse Card",
    description:"Card that can be Equiped on specific part of a Gear",
    option1: 200,
    option2: 10,
    option3: 23,
    option4: 111,
    maxOption1: 547,
    maxOption2: 15,
    maxOption3: 27,
    maxOption4: 192,
    optionName1: "M.ATK",
    optionName2: "ATK",
    optionName3: "AGI",
    optionName4: "STR",
  }
];

function App() {
  return (
    <div className="App">
      <Container>
        <div md={3}></div>
        <div md={8}>
          <Card className="p-1 d-flex flex-row flex-wrap justify-content-center">
            {dummyData.map(item => <Item {...item}/>)}
          </Card>
          <FormPost />
        </div>
      </Container>
    </div>
  );
}

export default App;
