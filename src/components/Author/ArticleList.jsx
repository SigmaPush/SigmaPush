import React, { Component } from 'react';

import ArticleItem from './ArticleItem';

class ArticleList extends Component {
  render() {
    const articleItems = this.props.authorArticles.map((article) => {
      return <ArticleItem
        article={article}
        key={article.title}
        />
    });

    return (
      <ul className="list-group">
        {articleItems}
      </ul>
    );
  }
}

export default ArticleList;
