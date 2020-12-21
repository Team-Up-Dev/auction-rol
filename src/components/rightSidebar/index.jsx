/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import React, { useState } from "react";
import styles from "./rightSidebar.module.scss";
import NumberFormat from "react-number-format";
import { FaAngleRight } from "react-icons/fa";
import {  OverlayTrigger, Popover } from "react-bootstrap";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

export default function RightSidebar() {
  const [closeState, setCloseState] = useState(false);

  const materials = [
    {
      nick: "Main Character",
      amethyst: 1000,
      emerald: 1000,
      ruby: 1000,
      sapphire: 1000,
      sardonyx: 1000,
      topaz: 1000,
    },
    {
      nick: "Main Character",
      amethyst: 1000,
      emerald: 1000,
      ruby: 1000,
      sapphire: 1000,
      sardonyx: 1000,
      topaz: 1000,
    },
    {
      nick: "Main Character",
      amethyst: 1000,
      emerald: 1000,
      ruby: 1000,
      sapphire: 1000,
      sardonyx: 1000,
      topaz: 1000,
    },
    {
      nick: "Archer 60",
      amethyst: 1000,
      emerald: 1000,
      ruby: 1000,
      sapphire: 1000,
      sardonyx: 1000,
      topaz: 1000,
    },
  ];

  const materialsName = [
    "Amethyst",
    "Emerald",
    "Ruby",
    "Sapphire",
    "Sardonyx",
    "Topaz",
  ];
  console.log(materials);
  console.log(eval(`materials[0].${materialsName[0].toLocaleLowerCase()}`));
  const totalAmethyst =
    materials.length > 2
      ? materials.map((item) => item.amethyst).reduce((a, b) => a + b)
      : materials.amethyst[0];

  const totalEmerald =
    materials.length > 2
      ? materials.map((item) => item.emerald).reduce((a, b) => a + b)
      : materials.emerald[0];

  const totalRuby =
    materials.length > 2
      ? materials.map((item) => item.ruby).reduce((a, b) => a + b)
      : materials.ruby[0];

  const totalSapphire =
    materials.length > 2
      ? materials.map((item) => item.sapphire).reduce((a, b) => a + b)
      : materials.sapphire[0];

  const totalSardonyx =
    materials.length > 2
      ? materials.map((item) => item.sardonyx).reduce((a, b) => a + b)
      : materials.sardonyx[0];

  const totalTopaz =
    materials.length > 2
      ? materials.map((item) => item.topaz).reduce((a, b) => a + b)
      : materials.topaz[0];

  return (
    <div className={`${styles.rightSidebarContainer} card  ${closeState ? styles.closeDiv : ""}`}>
      <div className={`${styles.rightSidebarContent}`}>
        <div className={`${styles.trigger} card`} onClick={() => {
            setCloseState(!closeState)
        }}>{closeState ? <AiOutlineDoubleLeft/> : <AiOutlineDoubleRight/> }</div>
        {materialsName.map((material,key) => (
          <div key={key} className={`d-flex align-items-center`}>
            <OverlayTrigger
              placement="left"
              style={{ width: "500px" }}
              delay={{ show: 0, hide: 50 }}
              overlay={
                <Popover id="popover-basic" style={{ width: "content" }}>
                  <Popover.Title className="d-flex" as="h3">
                    <span style={{ marginRight: "0.25rem" }}>{material}</span>
                    <NumberFormat
                      value={eval(`total${material}`)}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={""}
                      renderText={(value) => <div>{value}</div>}
                    />
                  </Popover.Title>
                  <Popover.Content>
                    {materials.map((item, idx) => (
                      <span className="d-flex align-items-center" key={idx}>
                        {idx + 1}
                        <FaAngleRight />
                        <NumberFormat
                          value={eval(`item.${material.toLowerCase()}`)}
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
                <img
                  className={`${styles.materialsImage} mx-2`}
                  src={`/images/items/materials/${material.toLowerCase()}-clean.png`}
                  alt=""
                />
                <span className={`font-weight-bold`}>
                  <NumberFormat
                    value={eval(`total${material}`)}
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
        ))}
      </div>
    </div>
  );
}
