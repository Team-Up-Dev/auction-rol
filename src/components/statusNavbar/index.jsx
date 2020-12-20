import React from "react";
import { Card } from "react-bootstrap";
import styles from "./statusNavbar.module.scss";
import zeny from "../../assets/currencies/zeny.png";
import dust from "../../assets/currencies/dust.png";

export default function StatusNavbar() {
  const currencies = {
    zeny: [],
    dust: [],
  };

  return (
    <Card className={`d-flex mx-5 mb-5 h-50 ${styles.navbarContainer}`}>
      <Card.Body className="d-flex justify-content-around">
        <div className="d-flex align-items-center">
          <img className={`${styles.currencies} mx-2`} src={zeny} alt="" />
          <span className={`font-weight-bold`}>DD</span>
        </div>
        <div className="d-flex align-items-center">
          <img className={`${styles.currencies} mx-2`} src={dust} alt="" />
          <span className={`font-weight-bold`}>DD</span>
        </div>
      </Card.Body>
    </Card>
  );
}
