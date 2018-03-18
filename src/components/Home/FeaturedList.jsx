import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listArticle } from '../../actions/action_article';
import GridList from '../common/GridList';

class FeaturedList extends Component {
  componentDidMount() {
    this.props.listArticle();
  }
  render() {
    const { title, containerWidth, mode, items } = this.props;
    return (
      <div>
        <GridList title={title} containerWidth={containerWidth} items={items} mode={mode} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.articles,
  }
}

export default connect(mapStateToProps, { listArticle })(FeaturedList);
