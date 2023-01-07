import React, { useContext } from "react";
import Card from "../../components/card/Card";
import "./main.css";
import dummydata from "../../dummy.json";
import { AppContext } from "../../context/Appprovider";

const Main = () => {
  const {toggle,settoggle} = useContext(AppContext)
  console.log(toggle,settoggle)
  return (
    <div className="Main">
      <div className="main_wrapper">
        <div className="nav_btn_wrapper">
          <button className="buy_pass" onClick={()=>{settoggle(!toggle)}}>Buy Pass</button>
          <button className="connect_wallet">Connect Wallet</button>
        </div>
        <h4 className="text-center mt-5 epoch_staking">Epoch Staking</h4>
        <div className="cards_wrapper d-flex">
          {dummydata.data.map((elem) => {
            return (
              <Card className="mycard">
                <h6 className="card_heading">{elem.heading}</h6>
                <span>{elem.value}</span>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
