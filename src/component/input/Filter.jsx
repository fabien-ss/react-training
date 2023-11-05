import React from "react"
import './Filter.css'

class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            MinPrice: null,
            MaxPrice: null
        };
        this.filterPrice = this.filterPrice.bind(this);
        this.setPriceValue = this.setPriceValue.bind(this);
    }
    setPriceValue({ target }){
        this.setState({
            [target.name] : target.value
        });
    }
    filterPrice(){
        this.props.onStateChange(this.state);
    }
    render(){
        return(
            <div className="Filtre">
                <h2>Filter</h2>
                <span className="number"> Price min <input name="MinPrice" onChange={ this.setPriceValue }/> </span>
                <span className="number"> Price max <input  name="MaxPrice" onChange={ this.setPriceValue }/> </span>
                <input type="submit" id="button1" onClick={(e) => {
                    this.filterPrice(this.state.MinPrice, this.state.MaxPrice)
                }}/>
            </div>
        )
    }
}

export default Filter