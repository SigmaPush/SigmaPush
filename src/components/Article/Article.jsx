import React, { Component } from 'react';
import ArticleContent from "./ArticleContent";
import RelatedArticles from "./RelatedArticles";
import AuthorInfo from "./AuthorInfo"
import References from "./References";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Toolbar from './ToolBar'

class Article extends Component {
  render() {
    return (
      <div>
        <Header />
        <AuthorInfo />
        <ArticleContent />
        <Toolbar />
        <div className="container border">
          <RelatedArticles title="Popular Articles" />
        </div>
        <div className="container p-3">
          <References />
        </div>
        Article : {this.props.match.params.id}
      <Footer />
      </div>
    );
  }
}

export default Article;

