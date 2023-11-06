import React from 'react'
import Card from '../image/Card'
import Filter from '../input/Filter'
import './Content.css'

class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataForCard : [{
                mainimage : process.env.PUBLIC_URL + "./OIP.jfif",
                image1 : process.env.PUBLIC_URL + "./OIP (1).jfif",
                image2 : process.env.PUBLIC_URL + "./OIP (2).jfif",
                image3 : process.env.PUBLIC_URL + "./OIP (3).jfif",
                argent:50
            },{
                mainimage : process.env.PUBLIC_URL + "./OIP.jfif",
                image1 : process.env.PUBLIC_URL + "./OIP (1).jfif",
                image2 : process.env.PUBLIC_URL + "./OIP (2).jfif",
                image3 : process.env.PUBLIC_URL + "./OIP (3).jfif",
                argent:40
            },{
                mainimage : process.env.PUBLIC_URL + "./OIP.jfif",
                image1 : process.env.PUBLIC_URL + "./OIP (1).jfif",
                image2 : process.env.PUBLIC_URL + "./OIP (2).jfif",
                image3 : process.env.PUBLIC_URL + "./OIP (3).jfif",
                argent:54
            },{
                mainimage : process.env.PUBLIC_URL + "./OIP.jfif",
                image1 : process.env.PUBLIC_URL + "./OIP (1).jfif",
                image2 : process.env.PUBLIC_URL + "./OIP (2).jfif",
                image3 : process.env.PUBLIC_URL + "./OIP (3).jfif",
                argent:45
            },{
                mainimage : process.env.PUBLIC_URL + "./OIP.jfif",
                image1 : process.env.PUBLIC_URL + "./OIP (1).jfif",
                image2 : process.env.PUBLIC_URL + "./OIP (2).jfif",
                image3 : process.env.PUBLIC_URL + "./OIP (3).jfif",
                argent:35
            },{
                mainimage : process.env.PUBLIC_URL + "./OIP.jfif",
                image1 : process.env.PUBLIC_URL + "./OIP (1).jfif",
                image2 : process.env.PUBLIC_URL + "./OIP (2).jfif",
                image3 : process.env.PUBLIC_URL + "./OIP (3).jfif",
                argent:100
            },{
                mainimage : process.env.PUBLIC_URL + "./OIP.jfif",
                image1 : process.env.PUBLIC_URL + "./OIP (1).jfif",
                image2 : process.env.PUBLIC_URL + "./OIP (2).jfif",
                image3 : process.env.PUBLIC_URL + "./OIP (3).jfif",
                argent:35
            },{
                mainimage : process.env.PUBLIC_URL + "./OIP.jfif",
                image1 : process.env.PUBLIC_URL + "./OIP (1).jfif",
                image2 : process.env.PUBLIC_URL + "./OIP (2).jfif",
                image3 : process.env.PUBLIC_URL + "./OIP (3).jfif",
                argent:35
            }],
            filterState : '',
            cardFilter : []
        };
        this.state.cardFilter = this.state.dataForCard
    }

    handleChildStateChange = (childState) =>{
        this.setState({ filterState: childState});
        this.filterProduct(childState.MaxPrice,  childState.MinPrice);
    }
    filterProduct(MaxPrice, MinPrice){
        const tablefilter = this.state.dataForCard.filter(
            (card) => card.argent >= MinPrice && card.argent <= MaxPrice
        );
        this.setState({
            cardFilter : tablefilter
        });
    }
    render(){

        return(
            <div className="styleContent">
                <div className="styleImageGroup">
                    {this.state.cardFilter.map((element) =>(
                        <Card
                            mainimage = { element.mainimage }
                            image1 = { element.image1 }
                            image2 = { element.image2 }
                            image3 = { element.image3 }
                            argent = { element.argent }
                        />
                    ))}
                </div>
                <div className="styleFilter">
                    <Filter onStateChange={this.handleChildStateChange}/>
                </div>
            </div>
        )
    }
}

export default Content