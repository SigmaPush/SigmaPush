import React, { Component } from 'react';

import ArticleItem from './ArticleItem';

class ArticleList extends Component {
  render() {
    return (
      <div className="col-md-6 bg-success text-center">
        <ArticleItem />
      </div>
    );
  }
}

export default ArticleList;
