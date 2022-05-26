import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import DateInput from "./Components/DateInput";
import Chart from "./Components/Chart";
import axios from "axios";

function App() {
  const [weekDataEUR_USD, setWeekDataEUR_USD] = useState([]);
  const [weekDataUSD_GBP, setWeekDataUSD_GBP] = useState([]);
  const [weekDaysName, setWeekDaysName] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const apiKey = "e6d56476b9a191585468";

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

      await axios.post('localhost:3001/',{
        weekDataEUR_USD: weekDataEUR_USD,
        weekDataUSD_GBP: weekDataUSD_GBP,
        weekDaysName: weekDaysName
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))

  };

  return (
    <div className="App">
      <Header />
      <DateInput
        setFromDate={setFromDate}
        setToDate={setToDate}
        convertCurrency={convertCurrency}
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
