import "./NavBar.scss";
import React, { useState } from "react";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
export default function NavBar() {
  let [bg, setBackGround] = useState("transparent");
  window.addEventListener("scroll",()=>{
    if(window.scrollY>0){
      setBackGround("black");
    }else{
      setBackGround("transparent")
    }
  })
  return (
    <div className="navBar" style={{ backgroundColor: bg }}>
      <div className="container">
        <div className="left">
          <img className="navBarLogo" src="/public/netflixLogo.png" alt="" />

          <span>HomePage</span>
          <span>Serise</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>MyList</span>
        </div>
        <div className="right">
          <Search className="icons" />
          <span>KID</span>
          <Notifications className="icons" />
          <img
            src="https://images.unsplash.com/photo-1642996719565-a4ec87362d61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rightImage"
          />
          <div className="profile">
            <ArrowDropDown className="icons" />
            <div className="options">
              <span className="option">Settings</span>
              <span className="option">LogOut</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
