import React from "react";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import NumberFormat from "react-number-format";
import styles from "./statusNavbar.module.scss";
import zeny from "../../assets/currencies/zeny.png";
import dust from "../../assets/currencies/dust.png";

export default function StatusNavbar() {
  const currencies = [
    { nick: "Main Character", zeny: 7000000, dust: 2000 },
    { nick: "Main Character", zeny: 3000000, dust: 2000 },
    { nick: "Main Character", zeny: 3000000, dust: 2000 },
    { nick: "Archer 60", zeny: 6000000, dust: 2000 },
  ];

  const totalZeny =
    currencies.length > 2
      ? currencies.map((item) => item.zeny).reduce((a, b) => a + b)
      : currencies.zeny[0];

  const totalDust =
    currencies.length > 2
      ? currencies.map((item) => item.dust).reduce((a, b) => a + b)
      : currencies.dust[0];
  // console.log(totalZeny,totalDust)
  return (
    <Card className={`d-flex mx-5 mb-5 h-50 ${styles.navbarContainer}`}>
      <Card.Body className="d-flex justify-content-around">
        <div className="d-flex align-items-center">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 0, hide: 200 }}
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">
                  <NumberFormat
                    value={totalZeny}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    prefix={""}
                    renderText={(value) => <div>{value}</div>}
                  />
                </Popover.Title>
                <Popover.Content>
                  {currencies.map((item, idx) => (
                    <span className="d-flex align-items-center" key={idx}>
                      {idx + 1}
                      <FaAngleRight />
                      <NumberFormat
                        value={item.zeny}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={""}
                        renderText={(value) => <div>{value}</div>}
                      />
                    </span>
                  ))}
                </Popover.Content>
              </Popover>
            }
          >
            <div className="d-flex align-items-center">
              <img className={`${styles.currencies} mx-2`} src={zeny} alt="" />
              <span className={`font-weight-bold`}>
                <NumberFormat
                  value={totalZeny}
                  displayType={"text"}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={""}
                  renderText={(value) => <div>{value}</div>}
                />
              </span>
            </div>
          </OverlayTrigger>
        </div>
        <div className="d-flex align-items-center">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 0, hide: 200 }}
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">
                  <NumberFormat
                    value={totalDust}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    prefix={""}
                    renderText={(value) => <div>{value}</div>}
                  />
                </Popover.Title>
                <Popover.Content>
                  {currencies.map((item, idx) => (
                    <span className="d-flex align-items-center" key={idx}>
                      {idx + 1}
                      <FaAngleRight />
                      <NumberFormat
                        value={item.dust}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={""}
                        renderText={(value) => <div>{value}</div>}
                      />
                    </span>
                  ))}
                </Popover.Content>
              </Popover>
            }
          >
            <div className="d-flex align-items-center">
              <img className={`${styles.currencies} mx-2`} src={dust} alt="" />
              <span className={`font-weight-bold`}>
                <NumberFormat
                  value={totalDust}
                  displayType={"text"}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={""}
                  renderText={(value) => <div>{value}</div>}
                />
              </span>
            </div>
          </OverlayTrigger>
        </div>
      </Card.Body>
    </Card>
  );
}
