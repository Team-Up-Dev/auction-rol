import React from "react";
import { Card, OverlayTrigger, Popover, Button } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import NumberFormat from "react-number-format";
import styles from "./statusNavbar.module.scss";
import zeny from "../../assets/currencies/zeny.png";
import dust from "../../assets/currencies/dust.png";

export default function StatusNavbar() {
  const currencies = {
    zeny: [7000000],
    dust: [1500],
  };

  const totalZeny =
    currencies.zeny.length > 2
      ? currencies.zeny.reduce((a, b) => a + b)
      : currencies.zeny[0];
  const totalDust =
    currencies.dust.length > 2
      ? currencies.dust.reduce((a, b) => a + b)
      : currencies.dust[0];
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
                  {currencies.zeny.map((item, idx) => (
                    <span className="d-flex align-items-center">
                      {idx + 1}
                      <FaAngleRight />
                      <NumberFormat
                        value={item}
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
                  And here's some <strong>amazing</strong> content. It's very
                  engaging. right?
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
