import React from "react";
import { Card, Image } from "react-bootstrap";
import styles from "./Item.module.scss";
import { AiFillCaretRight } from "react-icons/ai";
const icons = {
  sword: require("../../assets/icons/sword-f.svg"),
  longsword: require("../../assets/icons/longsword.svg"),
  material: require("../../assets/icons/material.svg"),
};

export default function Item(props) {
  const processed = {
    option1:
      props.option1 && props.option1.length && props.option1.includes("%")
        ? props.option1.slice(0, -1)
        : props.option1,
    option2:
      props.option2 && props.option2.length && props.option2.includes("%")
        ? props.option2.slice(0, -1)
        : props.option2,
    option3:
      props.option3 && props.option3.length && props.option3.includes("%")
        ? props.option3.slice(0, -1)
        : props.option3,
    option4:
      props.option4 && props.option4.length && props.option4.includes("%")
        ? props.option4.slice(0, -1)
        : props.option4,
    maxOption1:
      props.maxOption1 &&
      props.maxOption1.length &&
      props.maxOption1.includes("%")
        ? props.maxOption1.slice(0, -1)
        : props.maxOption1,
    maxOption2:
      props.maxOption2 &&
      props.maxOption2.length &&
      props.maxOption2.includes("%")
        ? props.maxOption2.slice(0, -1)
        : props.maxOption2,
    maxOption3:
      props.maxOption3 &&
      props.maxOption3.length &&
      props.maxOption3.includes("%")
        ? props.maxOption3.slice(0, -1)
        : props.maxOption3,
    maxOption4:
      props.maxOption4 &&
      props.maxOption4.length &&
      props.maxOption4.includes("%")
        ? props.maxOption4.slice(0, -1)
        : props.maxOption4,
  };

  const options = {
    opt1:
      processed.maxOption1 && (processed.option1 / processed.maxOption1) * 100,
    opt2:
      processed.maxOption2 && (processed.option2 / processed.maxOption2) * 100,
    opt3:
      processed.maxOption3 && (processed.option3 / processed.maxOption3) * 100,
    opt4:
      processed.maxOption4 && (processed.option4 / processed.maxOption4) * 100,
  };

  console.log(options);
  const statusBarColor = (width) => {
    return width <= 40
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
          <img alt={"itemImage"}
            className={styles.itemImage}
            src={`/images/items/${props.type && props.type}/${props.title}.png`}
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
          {props.maxOption1 && (
            <div className="w-100">
              <p className="d-flex align-items-center justify-content-between mb-0">
                <span>
                  <AiFillCaretRight />
                  <span className="font-weight-bold">{props.optionName1}</span>
                </span>
                <span>MAX +{props.maxOption1}</span>
              </p>
              <div className={`${styles.statusBar}`}>
                <div className={`${styles.statusContainer}`}></div>
                <div
                  style={{
                    backgroundImage: `linear-gradient(${statusBarColor(
                      options.opt1
                    )})`,
                    width: `${options.opt1}%`,
                  }}
                  className={`${styles.currentStatus}`}
                ></div>
                <span className={`font-weight-bold ${styles.statusText}`}>
                  {props.option1}
                </span>
              </div>
            </div>
          )}
          {props.maxOption2 && (
            <div className="w-100">
              <p className="d-flex align-items-center justify-content-between mb-0">
                <span>
                  <AiFillCaretRight />
                  <span className="font-weight-bold">{props.optionName2}</span>
                </span>
                <span>MAX +{props.maxOption2}</span>
              </p>
              <div className={`${styles.statusBar}`}>
                <div className={`${styles.statusContainer}`}></div>
                <div
                  style={{
                    backgroundImage: `linear-gradient(${statusBarColor(
                      options.opt2
                    )})`,
                    width: `${options.opt2}%`,
                  }}
                  className={`${styles.currentStatus}`}
                ></div>
                <span className={`font-weight-bold ${styles.statusText}`}>
                  {props.option2}
                </span>
              </div>
            </div>
          )}
          {props.maxOption3 && (
            <div className="w-100">
              <p className="d-flex align-items-center justify-content-between mb-0">
                <span>
                  <AiFillCaretRight />
                  <span className="font-weight-bold">{props.optionName3}</span>
                </span>
                <span>MAX +{props.maxOption3}</span>
              </p>
              <div className={`${styles.statusBar}`}>
                <div className={`${styles.statusContainer}`}></div>
                <div
                  style={{
                    backgroundImage: `linear-gradient(${statusBarColor(
                      options.opt3
                    )})`,
                    width: `${options.opt3}%`,
                  }}
                  className={`${styles.currentStatus}`}
                ></div>
                <span className={`font-weight-bold ${styles.statusText}`}>
                  {props.option3}
                </span>
              </div>
            </div>
          )}
          {props.maxOption4 && (
            <div className="w-100">
              <p className="d-flex align-items-center justify-content-between mb-0">
                <span>
                  <AiFillCaretRight />
                  <span className="font-weight-bold">{props.optionName4}</span>
                </span>
                <span>MAX +{props.maxOption4}</span>
              </p>
              <div className={`${styles.statusBar}`}>
                <div className={`${styles.statusContainer}`}></div>
                <div
                  style={{
                    backgroundImage: `linear-gradient(${statusBarColor(
                      options.opt4
                    )})`,
                    width: `${options.opt4}%`,
                  }}
                  className={`${styles.currentStatus}`}
                ></div>
                <span className={`font-weight-bold ${styles.statusText}`}>
                  {props.option4}
                </span>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
      {props.qc && (
        <Card.Body className={`${styles.cardQualityBody} d-flex justify-content-center align-items-center`}>
          <span className={`${styles.badge}`}>Card Quality</span>
          <div className={`${styles.qualityCard} border h1 w-50 d-flex align-items-center justify-content-center`}>
            {props.qc && `${props.qc}%`}
          </div>
        </Card.Body>
      )}
    </Card>
  );
}
