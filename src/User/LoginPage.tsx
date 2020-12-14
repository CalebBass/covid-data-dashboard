import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthApi } from "../api/AuthApi";
import Login from "./Login";


const LoginPage = () => {
  return (
    <>
        <Login />
    </>
  );
};

export default LoginPage;
