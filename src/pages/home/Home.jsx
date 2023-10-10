import React from "react";
import "./Home.scss";
import NavBar from "../../component/navbar/NavBar";
import Feature from "../../component/feature/Feature";
export default function Home() {
  return (
    <div>
      <div className="home">
        <NavBar/>
        <Feature type="series"/>
      </div>
    </div>
  );
}