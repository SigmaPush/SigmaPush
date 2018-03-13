import React, { Component } from 'react';

import Header from '../Header';
import AuthorInfo from './AuthorInfo';
import AuthorTopics from './AuthorTopics';
import Footer from '../Footer';

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
