import React from 'react';
import Header from '../header/Header'
import Content from '../content/Content'
import Footer from '../footer/Footer'
import SideBar from '../navbar/Sidebar'
import Test from '../test/Test'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

class Achat extends React.Component{
    render(){
        return(
            <>
            <Router>
                <Routes path='achat'>
                    <Header />
                    <SideBar />
                    <Content />
                    <Footer />
                </Routes>
            </Router>
            </>
        )
    }
}

export default Achat