import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import HomeBody from './HomeBody';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <HomeBody />
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
