import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const theme = {
  pageHeadingBackground: "#28313b",

  sidebarColorTextActive: "#FEAD00",
};

const pages = [
  {
    path: "/",
    title: "Design System",
    theme: {
      background: "#fead00",
    },
    content: pageLoader(() => import("./intro.md")),
  },
  {
    title: "Cores",
    path: "/cores.md",
    content: pageLoader(() => import("./cores.md")),
  },
];

ReactDOM.render(
  <Catalog
    title="LEXIO"
    pages={pages}
    logoSrc="https://www.lexio.legal/wp-content/themes/LexioTheme/imagens-min/LEXIO%20PB.png"
    theme={theme}
  />,
  document.getElementById("catalog")
);
