import React from "react";
import { Container } from "../container/container.component";
import { Sidebar } from "../sidebar/sidebar.component";

import "./body.styles.css";

export const Body = () => (
  <div className="main-content">
    <Container />
    <Sidebar />
  </div>
);
