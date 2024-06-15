import "./App.css";
import React from "react";
import SearchBar from "./components/SearchBar";
import TravelList from "./components/TravelList";
import { TravelProvider } from "./context/TravelContext";

function App () {
  return (
    <TravelProvider>
      <div className="app">
        <div className="container">
          <h1 className="font-bold">ค้นหาที่เที่ยว</h1>
          <SearchBar />
          <TravelList />
        </div>
      </div>
    </TravelProvider>
  );
};

export default App;
