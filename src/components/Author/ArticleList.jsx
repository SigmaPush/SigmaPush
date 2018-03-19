import React, { Component } from 'react';

import ArticleItem from './ArticleItem';

class ArticleList extends Component {
  render() {
    const { activeArticles } = this.props;
    const articleItems = activeArticles.map((article) => {
      return <ArticleItem
          article={article}
          key={article.id}
        />
    });

    return (
      <div>
        <ul className="list-group border border-warning">
          {articleItems}
        </ul>
      </div>
    );
  }
}

export default ArticleList;
