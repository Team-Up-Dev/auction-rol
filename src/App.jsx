import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./components/item";
import { Container, Card } from "react-bootstrap";
import StatusNavbar from "./components/statusNavbar";
import RightSidebar from "./components/rightSidebar";

const dummyData = [
  {
    type: "cards",
    category: "longsword",
    level: 29,
    title: "Wolf Card",
    description: "Card that can be Equiped on specific part of a Gear",
    option1: 191,
    option2: "3.5%",
    option3: "3.3%",
    maxOption1: 339,
    maxOption2: "4%",
    maxOption3: "4.2%",
    optionName1: "ATK",
    optionName2: "ATK",
    optionName3: "Critical Dmg Inc.",
    qc: 56,
  },
  {
    type: "cards",
    category: "longsword",
    level: 20,
    title: "Wolf Card",
    description: "Card that can be Equiped on specific part of a Gear",
    option1: 112,
    option2: "2.25%",
    option3: "3.6%",
    maxOption1: 231,
    maxOption2: "3.5%",
    maxOption3: "4.2%",
    optionName1: "ATK",
    optionName2: "ATK",
    optionName3: "Critical Dmg Inc.",
    qc: 41,
  },
  {
    type: "cards",
    category: "longsword",
    level: 60,
    title: "Soldier Skel Card",
    description: "Card that can be Equiped on specific part of a Gear",
    option1: 448,
    option2: "12.25%",
    maxOption1: 825,
    maxOption2: "15.4%",
    optionName1: "ATK",
    optionName2: "Critical ATK Rate.",
    qc: 47,
  },
  {
    type: "cards",
    category: "longsword",
    level: 10,
    title: "Eclipse Card",
    description: "Card that can be Equiped on specific part of a Gear",
    option1: 26,
    option2: 11,
    option3: 15.75,
    option4: 4.75,
    maxOption1: 55,
    maxOption2: 14,
    maxOption3: 20.25,
    maxOption4: 6.25,
    optionName1: "M.DEF",
    optionName2: "VIT",
    optionName3: "AGI",
    optionName4: "STR",
  },
  {
    type: "cards",
    category: "all",
    level: 30,
    title: "Mastering Card",
    description: "Card that can be Equiped on specific part of a Gear",
    option1: 107,
    option2: 118,
    option3: 118,
    option4: 5,
    maxOption1: 210,
    maxOption2: 230,
    maxOption3: 230,
    maxOption4: 8,
    optionName1: "ATK",
    optionName2: "M.ATK",
    optionName3: "HP",
    optionName4: "Default Stats",
  },
  {
    type: "cards",
    category: "all",
    level: 30,
    title: "Mastering Card",
    description: "Card that can be Equiped on specific part of a Gear",
    option1: 107,
    option2: 118,
    option3: 118,
    option4: 5,
    maxOption1: 210,
    maxOption2: 230,
    maxOption3: 230,
    maxOption4: 8,
    optionName1: "ATK",
    optionName2: "M.ATK",
    optionName3: "HP",
    optionName4: "Default Stats",
  },
  {
    type: "cards",
    category: "all",
    level: 30,
    title: "Mastering Card",
    description: "Card that can be Equiped on specific part of a Gear",
    option1: 107,
    option2: 118,
    option3: 118,
    option4: 5,
    maxOption1: 210,
    maxOption2: 230,
    maxOption3: 230,
    maxOption4: 8,
    optionName1: "ATK",
    optionName2: "M.ATK",
    optionName3: "HP",
    optionName4: "Default Stats",
  },
  {
    type: "cards",
    category: "all",
    level: 30,
    title: "Mastering Card",
    description: "Card that can be Equiped on specific part of a Gear",
    option1: 107,
    option2: 118,
    option3: 118,
    option4: 5,
    maxOption1: 210,
    maxOption2: 230,
    maxOption3: 230,
    maxOption4: 8,
    optionName1: "ATK",
    optionName2: "M.ATK",
    optionName3: "HP",
    optionName4: "Default Stats",
  },
];

function App() {
  return (
    <div className="App">
      <StatusNavbar />
      <Container>
        <div md={3}></div>
        <div md={8}>
          <Card className="p-1 d-flex flex-row flex-wrap justify-content-center">
            {dummyData.map((item, key) => (
              <Item key={key} {...item} />
            ))}
          </Card>
          {/* <FormPost /> */}
        </div>
        <RightSidebar />
      </Container>
    </div>
  );
}

export default App;
