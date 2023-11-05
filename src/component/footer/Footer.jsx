import React from "react"
import Information from "./Information";

const styleFooter = {
    border: "none",
    "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    margin: "auto",
    width: "900px",
    display: "flex",
    "margin-bottom": "0px"
}

class Footer extends React.Component{
    render(){
        return(
            <footer style={styleFooter}>
                <Information
                    valeur="Information"
                    valeur1="About us"
                />
                <Information
                    valeur="Contact"
                    valeur1="Email"
                />
            </footer>
        )
    }
}

export default Footer