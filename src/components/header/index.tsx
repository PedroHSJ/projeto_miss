import { Layout, Menu, Tooltip, Typography, theme } from "antd";
import React, { useState } from "react";
import Icon, {
  HomeFilled,
  ShrinkOutlined,
  ReadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
interface NavBarProps {
  defaultSelectedKey: string;
}

export const NavBar = ({ defaultSelectedKey }: NavBarProps) => {
  const { Header, Content, Footer, Sider } = Layout;
  const { Title } = Typography;
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <div
        className="
      flex

      flex-col
      justify-center
      items-center
      p-1
      "
      >
        <ShrinkOutlined style={{ fontSize: "20px", color: "white" }} />
        <Title
          level={5}
          style={{
            color: "white",
          }}
        >
          Vocation
        </Title>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[defaultSelectedKey]}
        style={{ minWidth: 250 }}
      >
        <Menu.Item key="1">
          <Link to="/">
            <HomeFilled />
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">
            <ReadOutlined />
            <span>Projetos</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
