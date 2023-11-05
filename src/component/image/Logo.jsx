import React from "react";
class Logo extends React.Component{
    render() {
        return(
            <img alt={this.props.a} src={this.props.source}
                width={this.props.w}
                height={this.props.h}
            />
        )
    }
}

export default Logo