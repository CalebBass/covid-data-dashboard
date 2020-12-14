import React, { useState } from 'react'
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Routes, Route, useRoutes, NavLink } from 'react-router-dom';
import UnitedStatesHome from '../components/UnitedStates/UnitedStatesHome';
import States from '../components/UnitedStates/States';
import Cities from '../components/UnitedStates/Cities';
import Home from '../components/Home';
const { Header, Content, Footer } = Layout;

const MainLayout = (props: any) => {

  const [token, setToken] = useState<string>('');

  const setTokenOnLogin = (token: string) => {

    setToken(token);
  }
    return (
        <div>
            <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="UnitedStates">United States</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="UnitedStates/States">States</NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="World">World</NavLink>
              </Menu.Item>
            </Menu>
            <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="5">
                <NavLink to="Register">Register</NavLink>
              </Menu.Item>
            <Menu.Item key="6">
                <NavLink to="World">Login</NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="UnitedStates" element={<UnitedStatesHome />} />
                  <Route path="UnitedStates/Cities" element={<Cities />} />
                  <Route path="UnitedStates/States" element={<States />} />
              </Routes>
              {props.children}

            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
        </div>
    )
}

export default MainLayout
