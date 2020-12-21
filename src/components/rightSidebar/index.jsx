import React from "react";
import styles from "./rightSidebar.module.scss";
import NumberFormat from "react-number-format";

export default function RightSidebar() {
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

  const totalsardonyx =
    materials.length > 2
      ? materials.map((item) => item.sardonyx).reduce((a, b) => a + b)
      : materials.sardonyx[0];

  const totalTopaz =
    materials.length > 2
      ? materials.map((item) => item.topaz).reduce((a, b) => a + b)
      : materials.topaz[0];

  return (
    <div className={`${styles.rightSidebarContainer} card`}>
      <div className={`${styles.rightSidebarContent}`}></div>
    </div>
  );
}
