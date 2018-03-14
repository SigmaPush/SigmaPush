import React, { Component } from 'react';

import AuthorInfo from "./ArticleComponents/AuthorInfo.jsx";
import ArticleContent from "./ArticleComponents/ArticleContent.jsx";
import RelatedArticles from "./ArticleComponents/RelatedArticles.jsx";
import References from "./ArticleComponents/References.jsx";
class Article extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mw-100">
          <div className="col-4 d-none d-lg-block"><AuthorInfo /></div>
          <div className="col-8 "><ArticleContent /></div>
        </div>
        <div className="row p-3">
          <RelatedArticles />
        </div>
        <div className="row p-3">
          <References />
        </div>
        
        Article : {this.props.match.params.id}
      </div>
    );
  }
}

export default Article;
