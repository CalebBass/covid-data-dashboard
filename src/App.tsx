import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import 'antd/dist/antd.css';
import UnitedStatesHome from './components/UnitedStates/UnitedStatesHome';
import States from './components/UnitedStates/States';
import Cities from './components/UnitedStates/Cities';
import { Layout, Menu } from "antd";
import LoginPage from './User/LoginPage';

const { Header, Content, Footer } = Layout;


function App() {
 
  return (
    <>
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
              <Menu.Item key="5">
                <NavLink to="Register">Register</NavLink>
              </Menu.Item>
            <Menu.Item key="6">
                <NavLink to="Login">Login</NavLink>
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
                  <Route path="Login" element={<LoginPage />} />

              </Routes>

            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </>
  );
}

export default App;
