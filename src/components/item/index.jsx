import React from "react";
import { Card, Image } from "react-bootstrap";
import styles from "./Item.module.scss";
import { AiFillCaretRight } from "react-icons/ai";
const icons = {
  sword: require("../../assets/icons/sword-f.svg"),
  longsword: require("../../assets/icons/longsword.svg"),
};

export default function Item(props) {
  const options = {
    opt1: props.maxOption1 && (props.option1 / props.maxOption1) * 100,
    opt2: props.maxOption2 && (props.option2 / props.maxOption2) * 100,
    opt3: props.maxOption3 && (props.option3 / props.maxOption3) * 100,
    opt4: props.maxOption4 && (props.option4 / props.maxOption4) * 100,
  };

  const statusBarColor = (width) => {
    return width <= 30
      ? `rgba(208,240,255,1),rgba(199,231,246,1)`
      : width <= 60
      ? `rgba(104,207,248,1),rgba(114,210,252,1)`
      : `rgba(50,145,253,1),rgba(59,128,203,1)`;
  };
  return (
    <Card className={styles.cardContainer}>
      <Card.Header className={styles.cardHead}></Card.Header>
      <Card.Body className={`${styles.cardBody} d-flex`}>
        <div className={styles.leftColumn}>
          <img
            className={styles.itemImage}
            src={`/images/items/${props.type}/${props.title}.png`}
          />
        </div>
        <div className={styles.rightColumn}>
          <Card.Title className={`d-flex flex-row ${styles.cardTitle}`}>
            <Image
              src={icons[props.category].default}
              className={styles.itemCategory}
            />
            <span>{`${props.level && `Lv. ${props.level} `} ${
              props.title
            }`}</span>
          </Card.Title>
          <hr className={`w-100 ${styles.horizontalLine}`} />
          <Card.Text className={`text-justify ${styles.cardDescription}`}>
            {props.description}
          </Card.Text>
        </div>
      </Card.Body>
      <Card.Body>
        <div className="d-flex justify-content-start flex-column">
          <div className="w-100">
            <p className="d-flex align-items-center justify-content-between mb-0">
              <span>
                <AiFillCaretRight />
                Stats
              </span>
              <span>MAX +</span>
            </p>
            <div className={`${styles.statusBar}`}>
              <div className={`${styles.statusContainer}`}></div>
              <div
                style={{
                  backgroundImage: `linear-gradient(${statusBarColor(options.opt1)})`,
                  width: `${options.opt1}%`,
                }}
                className={`${styles.currentStatus}`}
              ></div>
            </div>
          </div>
          <div className="w-100">
            <p className="d-flex align-items-center justify-content-between mb-0">
              <AiFillCaretRight />
              Stats
            </p>
            <div className={`${styles.statusBar}`}>
              <div className={`${styles.statusContainer}`}></div>
              <div
                style={{
                  backgroundImage: `linear-gradient(${statusBarColor(options.opt2)})`,
                  width: `${options.opt2}%`,
                }}
                className={`${styles.currentStatus}`}
              ></div>
            </div>
          </div>
          <div className="w-100">
            <p className="d-flex align-items-center justify-content-between mb-0">
              <AiFillCaretRight />
              Stats
            </p>
            <div className={`${styles.statusBar}`}>
              <div className={`${styles.statusContainer}`}></div>
              <div
                style={{
                  backgroundImage: `linear-gradient(${statusBarColor(options.opt3)})`,
                  width: `${options.opt3}%`,
                }}
                className={`${styles.currentStatus}`}
              ></div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
