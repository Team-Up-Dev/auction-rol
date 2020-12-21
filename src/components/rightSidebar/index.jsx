import React from "react";
import styles from "./rightSidebar.module.scss";
import NumberFormat from "react-number-format";

export default function RightSidebar() {
  const materials = [
    { nick: "Main Character", amethyst: 1000, emerald: 1000, ruby:1000, sapphire: 1000, sardonyx: 1000, topaz: 1000 },
    { nick: "Main Character", amethyst: 1000, emerald: 1000, ruby:1000, sapphire: 1000, sardonyx: 1000, topaz: 1000 },
    { nick: "Main Character", amethyst: 1000, emerald: 1000, ruby:1000, sapphire: 1000, sardonyx: 1000, topaz: 1000 },
    { nick: "Archer 60", amethyst: 1000, emerald: 1000, ruby:1000, sapphire: 1000, sardonyx: 1000, topaz: 1000 },
  ];
  return (
    <div className={`${styles.rightSidebarContainer} card`}>
      <div className={`${styles.rightSidebarContent}`}>

      </div>
    </div>
  );
}
