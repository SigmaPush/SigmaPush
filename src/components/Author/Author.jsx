import React, { Component } from 'react';

import Header from '../common/Header';
import AuthorInfo from './AuthorInfo';
import AuthorTopics from './AuthorTopics';
import Footer from '../common/Footer';

import './Author.css';

class Author extends Component {
  render() {
    return (
      <div>
        <Header userName="lidaxia" />
        <AuthorInfo />
        <AuthorTopics />
        <Footer />
      </div>
    );
  }
}

export default Author;
