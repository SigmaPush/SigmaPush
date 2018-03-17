import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthorListItem from './AuthorListItem';

class AuthorList extends Component {
  renderListItem(item) {
    return (
      <li key={item.id} className="list-group-item pl-0 pr-0">
        <AuthorListItem item={item} />
      </li>
    );
  }
  render() {
    const items = this.props.items;
    return (
      <div>
        <h5>Popular Contributor</h5>
        <ul className="list-group list-group-flush home-author-list border-bottom">
          {items.map(this.renderListItem)}
        </ul>
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
