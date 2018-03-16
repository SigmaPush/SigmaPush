import React, { Component } from 'react';

import AuthorInfo from "./AuthorInfo.jsx";
import ArticleContent from "./ArticleContent.jsx";
import RelatedArticles from "./RelatedArticles.jsx";
import References from "./References.jsx";
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
