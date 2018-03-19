import React, { Component } from 'react';

import Header from '../common/Header';
import AuthorInfo from './AuthorInfo';
import AuthorTopics from './AuthorTopics';
import Footer from '../common/Footer';

import './Author.css';

class Author extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <Header />
        <AuthorInfo />
        <AuthorTopics authorId={id} />
        <Footer />
      </div>
    );
  }
}

export default Author;
