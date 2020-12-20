import React from "react";
import { Card, OverlayTrigger, Popover, Button } from "react-bootstrap";
import styles from "./statusNavbar.module.scss";
import zeny from "../../assets/currencies/zeny.png";
import dust from "../../assets/currencies/dust.png";

export default function StatusNavbar() {
  const currencies = {
    zeny: [0],
    dust: [0],
  };

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
                  {currencies.zeny.length > 2 ? currencies.zeny.reduce((a, b) => a + b) : currencies.zeny}
                </Popover.Title>
                <Popover.Content>
                  And here's some <strong>amazing</strong> content. It's very
                  engaging. right?
                </Popover.Content>
              </Popover>
            }
          >
            <div>
              <img className={`${styles.currencies} mx-2`} src={zeny} alt="" />
              <span className={`font-weight-bold`}>{currencies.zeny.length > 2 ? currencies.zeny.reduce((a, b) => a + b) : currencies.zeny}</span>
            </div>
          </OverlayTrigger>
        </div>
        <div className="d-flex align-items-center">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 0, hide: 200 }}
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">{currencies.dust.length > 2 ? currencies.dust.reduce((a, b) => a + b) : currencies.dust}</Popover.Title>
                <Popover.Content>
                  And here's some <strong>amazing</strong> content. It's very
                  engaging. right?
                </Popover.Content>
              </Popover>
            }
          >
            <div>
              <img className={`${styles.currencies} mx-2`} src={dust} alt="" />
              <span className={`font-weight-bold`}>{currencies.dust.length > 2 ? currencies.dust.reduce((a, b) => a + b) : currencies.dust}</span>
            </div>
          </OverlayTrigger>
        </div>
      </Card.Body>
    </Card>
  );
}
