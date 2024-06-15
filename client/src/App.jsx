import "./App.css";
import React from "react";
import SearchBar from "./components/SearchBar";
import TravelList from "./components/TravelList";
import { TravelProvider } from "./assets/context/TravelContext";

function App () {
  return (
    <TravelProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">ค้นหาสถานที่ท่องเที่ยว</h1>
          <SearchBar />
          <TravelList />
        </div>
      </div>
    </TravelProvider>
  );
};

export default App;
