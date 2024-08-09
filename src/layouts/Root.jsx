import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {
  return (
    <div className="">
      <div className="bg-base-200">
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
