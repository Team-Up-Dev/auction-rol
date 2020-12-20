import React from "react";
import { Card, Image } from "react-bootstrap";
import styles from "./Item.module.scss";
const icons = {
  sword: require('../../assets/icons/sword-f.svg'),
  longsword: require('../../assets/icons/longsword.svg')
}

export default function Item(props) {
  return (
    <Card className={styles.cardContainer}>
      <Card.Header className={styles.cardHead}></Card.Header>
      <Card.Body className={`${styles.cardBody} d-flex`}>
        <div className={styles.leftColumn}>
          <img className={styles.itemImage} src={`/images/items/${props.type}/${props.title}.png`} />
        </div>
        <div className={styles.rightColumn}>
          <Card.Title className={`d-flex flex-row ${styles.cardTitle}`}>
            <Image src={icons[props.category].default} className={styles.itemCategory} />
            <span>{`${props.level && `Lv. ${props.level} `} ${props.title}`}</span>
          </Card.Title>
          <hr className={`w-100 ${styles.horizontalLine}`} />
          <Card.Text className={`text-justify ${styles.cardDescription}`}>
            {props.description}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
