import React from "react"


class Information extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    <li><a href={this.props.link}>{this.props.valeur}</a></li>
                    <li><a href={this.props.link}>{this.props.valeur1}</a></li>
                </ul>
            </div>
            )
    }
}

export default Information