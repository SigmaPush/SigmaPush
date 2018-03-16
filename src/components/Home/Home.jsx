import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Carousel from './Carousel';
import FeaturedList from './FeaturedList';
import AuthorList from './AuthorList';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <FeaturedList title="Popular Articles" containerWidth="12" mode="table" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <FeaturedList title="Popular Articles" containerWidth="12" mode="slider" />
            </div>
          </div>git
          <div className="row">
            <div className="col-sm-12 col-md-10">
              <FeaturedList title="Popular Articles" containerWidth="10" />
            </div>
            <div className="d-none d-md-block col-md-2">
              <AuthorList />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-9">
              <FeaturedList title="Popular Articles" containerWidth="9" />
            </div>
            <div className="d-none d-md-block col-md-3">
              <AuthorList />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
