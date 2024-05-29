import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./Search";
import ResultCard from "./Results";
import axios from "axios";

function App() {
  const [apiData, setData] = useState({
    "searched_coin": "",
    "search_price": "",
    "search_cap": "",
    "search_24h": ""});

  async function BackEndCall(userSearch){
    const response = await axios.get(`http://127.0.0.1:8000/crypto-info/${userSearch}`);
    const data = response.data;
    setData({
      "searched_coin": data.searched_coin,
      "search_price": data.search_price,
      "search_cap": data.search_cap,
      "search_24h": data.search_24h,
    });
    await console.log(apiData);
  }

  return (
    <div className="mainCard">
      <Header />
      <SearchBar Search={BackEndCall} />
      <ResultCard 
          searched={apiData.searched_coin}
          price={apiData.search_price}
          cap={apiData.search_cap}
          movement={apiData.search_24h}
      />
      <Footer />
    </div>
  );
}

export default App;
