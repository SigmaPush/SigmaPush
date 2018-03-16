import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthorListItem from './AuthorListItem';

class AuthorList extends Component {
  renderListItem(item) {
    return (
      <div>
        <AuthorListItem item={item} />
      </div>
    );
  }
  render() {
    const items = this.props.items;
    return (
      <div>
        <h5>Popular Contributor</h5>
        <div class="list-group home-author-list">
          {items.map(this.renderListItem)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.popularAuthors
  }
}

export default connect(mapStateToProps, null)(AuthorList);
