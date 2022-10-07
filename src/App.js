import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Sidebar/>
    </React.Fragment>
  )
}