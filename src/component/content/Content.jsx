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
                image3 : process.env.PUBLIC_URL + "./OIP (3).jfif",
                image2 : process.env.PUBLIC_URL + "./OIP (2).jfif",
                image1 : process.env.PUBLIC_URL + "./OIP (1).jfif",
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
            <main id="main" className="main">
                <section className="section dashboard">
                    <div className="styleContent">
                        <div className="styleImageGroup">
                            {this.state.cardFilter.map((element) =>(
                                                               <div className="card">
                                    <div className="card-header">Product</div>
                                    <div className="card-body">
                                    <Card
                                        mainimage = { element.mainimage }
                                        image1 = { element.image1 }
                                        image2 = { element.image2 }
                                        image3 = { element.image3 }
                                        argent = { element.argent }
                                    />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="styleFilter">
                            <Filter onStateChange={this.handleChildStateChange}/>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Content