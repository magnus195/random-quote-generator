import React, {useEffect, useState} from 'react';
import './App.css';

var quotes = [
  {
    text: "Life is short, eat lasagna",
    author: "Me"
  },
  {
    text: "If your stomach little empty, your head little empty",
    author: "Mr. Lee (rip)"
  },
  {
    text: "I like turtles",
    author: "Some kid"
  },
  {
    text: "Ten people died last night in the Bronx due to a fire that killed ten people in the Bronx last night during a fire",
    author: "The news"
  }
]

function App() {
  let [quote, setQuote] = useState({
    "text": "",
    "author": ""
  })

  function newQuote() {
    const quoteNumber = Math.floor(Math.random() * quotes.length)
    const newQuote = quotes[quoteNumber]
    setQuote(newQuote)
    return
  }
  useEffect(() => {
    newQuote()
  })

  return (
      <div className="App">
        <div id={"quote-box"}>
          <h1 id={"text"}>{quote.text}</h1>
          <p id={"author"}>{quote.author}</p>
          <div id={"buttons"}>
            <button onClick={newQuote} id={"new-quote"}>New Quote please</button>
            <a id={"tweet-quote"}
               href={"https://twitter.com/intent/tweet?text=" + quote.text + "&url=nymo.xyz"}>Tweet this</a>
          </div>
        </div>
      </div>
  );
}

export default App;
