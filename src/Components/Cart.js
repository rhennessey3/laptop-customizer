import React from "react"
import Summary from "./Summary.js"
import TheTotalAmount from "./TheTotalAmount.js"


export default function Cart(props) {

    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
    );
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary selected={props.selected} USCurrencyFormat={props.USCurrencyFormat} />
            <TheTotalAmount USCurrencyFormat={props.USCurrencyFormat} total={total} />
        </section>
    )
}