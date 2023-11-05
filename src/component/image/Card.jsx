import React from 'react';
import './Card.css';

class Card extends React.Component {

  changeImage2(index) {
    this.setState((prevState) => {
      const images = [...prevState.images];
      const mainImage = images[index];
      images[index] = prevState.mainimage;

      return {
        mainimage: mainImage,
        images: images,
      };
    });
  }

  addToBag(){
    if(this.state.stock > 0){
      this.setState({
        stock : this.state.stock - 1
      })
    }
    else{
      this.setState({
        message: "stock out"
      })
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      stock: 8,
      mainimage: this.props.mainimage,
      message: "",
      images: [ this.props.image1, this.props.image2, this.props.image3 ]
    };
  }
  render() {
    return (
      <div className="card-container">
        <div className="card-image">
            <img className="image"
              alt={this.props.text}
              src={this.state.mainimage}
              style={{ width: 150, height: 90 }}
            />
            <div className="card-child">
              {this.state.images.map((element, index) =>(
                <img
                  src = {element}
                  alt = ""
                  onClick = {
                  (e) =>
                    this.changeImage2(index)
                  }
                />
                ))}

            </div>
        </div>
          
          <div className="card-price">
              Price: {this.props.argent}
          </div>
          <div className="card-stock">
              Stock: <p>{this.state.stock}</p>
          </div>
          <div className="card-action" >
              <input
                type="submit"
                value="Buy"
                onClick={(e) =>
                  this.addToBag()
                }
              />
            <label>
              {this.state.message}
            </label>
          </div>
      </div>
      );
  }
}

export default Card;
