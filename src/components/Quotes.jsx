import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

function getRandomQuote(quotes) {
       return quotes[Math.floor(Math.random() * quotes.length)];
}

function Quotes() {
       const [quotes, setQuotes] = useState([]);
       const [quote, setQuote] = useState();
       useEffect(() => {
              fetch("https://type.fit/api/quotes")
                .then((res) => res.json())
                .then((json) => {
                  setQuotes(json);
                  setQuote(json[0]);
                });
       }, []);

       function getNewQuote() {
              setQuote(getRandomQuote(quotes));
       }
       return (
              <main>
                     <Navbar /><br /><br />
                     <h1>Quote Generator</h1>
                     <section>
                            <button onClick={getNewQuote} className='button'>New Quote</button><br /><br />
                            <h3>
                            <span>“</span>
                            {quote?.text}<span>“</span>
                            </h3><br />
                            <i>- {quote?.author}</i>
                     </section>
              </main>
       )
}

export default Quotes