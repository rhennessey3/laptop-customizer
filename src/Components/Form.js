import React from "react"
// import Formheaderjam from "./Components/FormTitle.js"


export default function Form(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {props.Features}
        </form>
    )
}