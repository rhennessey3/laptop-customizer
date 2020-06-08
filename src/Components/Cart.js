import React from "react"
import Summary from "./Summary.js"
import TheTotalAmount from "./TheTotalAmount.js"


export default function Cart(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary summary={props.summary} />
            <TheTotalAmount USCurrencyFormat={props.USCurrencyFormat} total={props.total} />
        </section>
    )
}