import React from "react";
import StyledNavbar from "../components/StyledNavbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};

export default Home;
