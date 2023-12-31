const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
import { useState, useEffect } from "react";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  //   useEffect(() => {
  //     async function getInitialQuote() {
  //       const response = await fetch(RANDOM_QUOTE_URL);
  //       const jsonResponse = await response.json();
  //       const randomQuote = jsonResponse.quote;
  //       setQuote(randomQuote);
  //     }
  //     getInitialQuote();
  //   }, []);

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
  }

  return (
    <div>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
      <button onClick={fetchQuote}> Get Quote </button>
    </div>
  );
}
