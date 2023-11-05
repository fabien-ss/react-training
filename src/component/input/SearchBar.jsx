import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component{
    render(){
        return(
            <div className="buttonStyleContainer">
                <input type="text"
                    name={this.props.nameInput}
                    className="buttonStyle"
                    placeholder="Seach"
                />
                <button className="buttonStyleSearch">
                    Search
                </button>
            </div>
        )
    }
}

export default SearchBar