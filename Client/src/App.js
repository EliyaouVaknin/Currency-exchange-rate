import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import DateInput from "./Components/DateInput";
import Chart from "./Components/Chart";
import axios from "axios";

function App() {
  const [weekDataEUR_USD, setWeekDataEUR_USD] = useState("aaaa");
  const [weekDataUSD_GBP, setWeekDataUSD_GBP] = useState("aaaa");
  const [weekDaysName, setWeekDaysName] = useState("aaaa");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const apiKey = "81729ac1078ca03ea10f";

  const convertCurrency = async (fromCurrency, toCurrency) => {
    fromCurrency = encodeURIComponent(fromCurrency);
    toCurrency = encodeURIComponent(toCurrency);
    var query = fromCurrency + "_" + toCurrency;

    var url = "https://free.currconv.com/api/v7/convert?q=" + query + "&compact=ultra&date=" + fromDate + "&endDate=" + toDate + "&apiKey=" + apiKey;

    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.EUR_USD != null) {
          setWeekDataEUR_USD(Object.values(res.EUR_USD));
          setWeekDaysName(Object.keys(res.EUR_USD));
        } else {
          setWeekDataUSD_GBP(Object.values(res.USD_GBP));
        }
      });

  };
  const store = () => {
    convertCurrency("EUR", "USD");
    convertCurrency("USD", "GBP");

    axios.post('http://localhost:3001/',{
      weekDataEUR_USD: weekDataEUR_USD,
      weekDataUSD_GBP: weekDataUSD_GBP,
      weekDaysName: weekDaysName
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }

useEffect(() => {

}, [weekDataEUR_USD, weekDataUSD_GBP, weekDaysName])



  return (
    <div className="App">
      <Header />
      <DateInput
        setFromDate={setFromDate}
        setToDate={setToDate}
        store = {store}
      />
      <Chart
        weekDataEUR_USD={weekDataEUR_USD}
        weekDataUSD_GBP={weekDataUSD_GBP}
        weekDaysName={weekDaysName}
      />
    </div>
  );
}

export default App;
