import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const Randomquote = () => {

    const Quotations = <FontAwesomeIcon icon={faQuoteLeft} />

    const [quotes, setQuotes] = useState('');
    const colorData = ['#613a43','#726a95','#f39c12','#a96971','#36384c','#849974','#bdbb99'];
    const [randomColor, setRandomColor] = useState('');

    const HandleQuotes = () => {
        axios.get('https://api.quotable.io/random')
        .then(response => {
            setQuotes(response.data);
        })
        .catch(error =>{
            console.error(error);
        });
    }

    useEffect(() => {
        HandleQuotes();
    },[]);

    const PressForQuotes = () => {
        HandleQuotes();
        const randomIndex = Math.floor(Math.random() * colorData.length);
        setRandomColor(colorData[randomIndex]);
    }

    return(
        <body style={{backgroundColor:randomColor, transition:"ease-in-out 1s"}}>
        <div className="mainbox">
            <div className="container">
                <div className="mainboxsquare">
                    <div className="myboxquote">
                        <div className="datahead">
                            <h1 style={{color:randomColor,transition:"ease-in-out 1s"}}>Random Quotes</h1>
                        </div>
                        <div className="quotes">
                            <h4 style={{color:randomColor,transition:"ease-in-out 1s"}}>{Quotations} {quotes.content}</h4>
                            <h5 style={{color:randomColor,transition:"ease-in-out 1s"}}>"{quotes.author}"</h5>
                        </div>
                        <div className="renderquote">
                            <button className="mybtnwork bgwork" style={{backgroundColor:randomColor,transition:"ease-in-out 1s"}} onClick={PressForQuotes}>New Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    )
}

export default Randomquote