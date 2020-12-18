import React,{useState} from "react";
import {
  ButtonGroup,
  Card,
  Form,
  ToggleButton,
  Button,
  Image,
  Col,
  Modal,
  InputGroup,
} from "react-bootstrap";
import Swal from "sweetalert2";

export default function FormWarehouse() {
  const [modalShow, setModal] = useState(false);
  const modalHandle = () => {
    setData({});
    setModal(false);
  };

  const [data, setData] = useState(null);
  const WareHouseModal = (props) => {
    const [highlight, setHighlight] = useState(0);
    const [petData, setPetData] = useState({});

    const swafirePost = () => {
      setModal(false);
      //addAnimal(AuthPayloads.access_token, petData);
      Swal.fire({
        title: `Pet successfully added!`,
        icon: "success",
        background: "#1A3150",
        iconColor: "yellow",
        showConfirmButton: false,

        customClass: {
          title: "text-light",
        },
      });
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="px-5">
          <Modal.Title id="contained-modal-title-vcenter">
            Add Database
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex f-col mx-3">
          <Card
            className={`m-3 ${highlight == 1 ? "selected-option-form" : ""}`}
            onClick={() => {
              setHighlight(1);
              setPetData({ ...petData, type: "Dog" });
            }}
          >
            <Card.Title className="text-center">Dog</Card.Title>
          </Card>
          <Card
            onClick={() => {
              setHighlight(2);
              setPetData({ ...petData, type: "Cat" });
            }}
            className={`m-3 ${highlight == 2 ? "selected-option-form" : ""}`}
          >
            <Card.Title className="text-center">Cat</Card.Title>
          </Card>
        </Modal.Body>
        <Modal.Body>
          <Form className="px-4">
            <Form.Group>
              <Form.Label className="vet-title-2">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Pet Name"
                name="name"
                value={petData.name}
                onChange={(e) =>
                  setPetData({ ...petData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-4" id="gender">
              <Form.Label className="vet-title-2">Gender</Form.Label>
              <ButtonGroup toggle name="radiogroup" className="border">
                <ToggleButton
                  key={1}
                  type="radio"
                  variant={petData.gender == "true" ? "primary" : ""}
                  name="gender"
                  value={true}
                  checked={petData.gender == true}
                  onChange={(e) =>
                    setPetData({ ...petData, gender: e.currentTarget.value })
                  }
                >
                  <span
                    className={petData.gender == "false" ? "text-white" : ""}
                  >
                    Male
                  </span>
                </ToggleButton>
                <ToggleButton
                  key={2}
                  type="radio"
                  variant={petData.gender == "false" ? "pink" : ""}
                  name="gender"
                  value={false}
                  checked={petData.gender == "false"}
                  onChange={(e) =>
                    setPetData({ ...petData, gender: e.currentTarget.value })
                  }
                >
                  <span
                    className={petData.gender == "true" ? "text-white" : ""}
                  >
                    Female
                  </span>
                </ToggleButton>
              </ButtonGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="px-4">
          <Button onClick={swafirePost}>Add Pet</Button>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <>
      <Button onClick={() => setModal(true)} />
      <WareHouseModal show={modalShow} onHide={() => modalHandle()} />
    </>
  );
}
