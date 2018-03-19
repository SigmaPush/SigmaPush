import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { listArticle } from '../../actions/action_article';
import { listCatalog } from '../../actions/action_catalog';

import Header from '../common/Header';
import AuthorInfo from './AuthorInfo';
import AuthorTopics from './AuthorTopics';
import Footer from '../common/Footer';

import './Author.css';

class Author extends Component {
  componentDidMount() {
    const authorId = this.props.match.params.id;
    this.props.listArticle(authorId);
    this.props.listCatalog();
  }

  render() {
    const authorId = this.props.match.params.id;
    const { authorArticles, catalogs } = this.props;

    if (_.isEmpty(authorArticles) || _.isEmpty(catalogs)) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <Header />
        <AuthorInfo
          authorId={authorId}
          authorArticles={authorArticles}
          catalogs={catalogs}
        />
        <AuthorTopics authorArticles={authorArticles} />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authorArticles: state.articles,
    catalogs: state.catalogs,
  };
}

export default connect(mapStateToProps, { listArticle, listCatalog })(Author);
