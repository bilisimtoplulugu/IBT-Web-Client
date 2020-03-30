import React from "react";
import "antd/dist/antd.css";
import { Menu as AntdMenu } from "antd";

import './menu.styles.css';

const pageList = [
    { name: "HAKKIMIZDA", path: "/hakkimizda" },
    { name: "GALERİ", path: "/galeri" },
    { name: "ETKİNLİKLER", path: "/etkinlikler" },
    { name: "ÜYELERİMİZ", path: "/uyelerimiz" },
    { name: "BLOG", path: "/blog" },
    { name: "İLETİŞİM", path: "/iletisim" }
  ];

export const Menu = () => (
  <nav className="menu">
    <AntdMenu
      mode="horizontal"
    >
      {pageList.map(page => (
        <AntdMenu.Item key={page.name}>
          <a href={page.path}>{page.name}</a>
        </AntdMenu.Item>
      ))}
    </AntdMenu>
  </nav>
);
