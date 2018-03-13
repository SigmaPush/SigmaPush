import React, { Component } from 'react';

import TopicDoughnut from './TopicDoughnut';
import ArticleList from './ArticleList';

class AuthorTopics extends Component {
  render() {
    return (
      <div className="container bg-light">
        AuthorTopics
        <div className="row justify-content-md-center">
          <TopicDoughnut />
          <ArticleList />
        </div>
      </div>
    );
  }
}

export default AuthorTopics;
