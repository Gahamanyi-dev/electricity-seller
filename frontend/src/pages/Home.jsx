import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
    <Navbar />
    <div>
      {" "}
      <div class="d-flex flex-row mt-5 justify-content-between w-75 mx-auto">
        <div class="p-2 w-100"></div>
        <div class="p-2 w-100 text-left">
          <p>
            ElectricitySeller is a web application that allows one to buy
            electricity online using meter number and the user will be given
            electricity according to the amount of money he or she has
          </p>
          <div className="bg-primary text-white rounded p-3 mt-5 text-center pointer">
            Buy electricity
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
