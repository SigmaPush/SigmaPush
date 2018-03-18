import React, { Component } from 'react';
import { connect } from "react-redux";
import { getArticle } from '../../actions/action_article';
import ArticleContent from "./ArticleContent";
import RelatedArticles from "./RelatedArticles";
import AuthorInfo from "./AuthorInfo"
import References from "./References";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Toolbar from './ToolBar'

class Article extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getArticle(id);
  }
  render() {
    const { article } = this.props;
    if (!article) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Header />
        <AuthorInfo className="author-info" data={article.author}/>
        <ArticleContent data={article}/>
        <Toolbar />
        <div className="container border">
          <RelatedArticles title="Popular Articles" containerWidth="9" url="/Article/" />
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

function mapStateToProps({ articles }, ownProps) {
  return { article: articles[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getArticle })(Article);

