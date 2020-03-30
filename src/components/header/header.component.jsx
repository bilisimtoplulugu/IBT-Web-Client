import React from "react";
import logo from "../../logo.png";
import { Menu } from "../menu/menu.component";
import { Social } from "../social/social.component";
import { Slider } from "../slider/slider.component";

import './header.styles.css';

export const Header = () => (
  <header>
    <div className="top">
      <img className="logo" src={logo} alt="IBT, İstanbul Bilişim Topluluğu" />
      <Menu />
      <Social />
    </div>
    <Slider />
  </header>
);
