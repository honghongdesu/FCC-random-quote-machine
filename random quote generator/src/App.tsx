import { useState } from 'react'
import quotes from "./assets/quotesBank.json"
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import './App.css'

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

const getRandomColor = () :  string => {
  return `hsl(` + Math.random() *360 + `, 40%, 70%)`;
}

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }

  return (
    <div className="background" style={{ backgroundColor: randomColor, transition}}>
      <div id="quote-box">
        <div className='quote-content' style={{ color: randomColor, transition }}>
          <h2 id="text">
           <FaQuoteLeft size="20" style={{marginRight: "10px"}} />
            {quote.quote}
            <FaQuoteRight size="20" style={{marginLeft: "10px"}} />  
          </h2> 
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a 
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style= {{
              backgroundColor: randomColor,
              marginRight: "10px",
              transition
            }} >
            <FaTwitter color="white" />
          </a>
          <button id="new-quote" style={{ backgroundColor: randomColor, transition }} onClick={changeQuote}>New Quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
