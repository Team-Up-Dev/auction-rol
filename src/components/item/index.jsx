import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from './Item.module.css'

export default function Item() {
    console.log(styles)
  return (
    <Card>
      <Card.Header className={styles.cardHead}></Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
