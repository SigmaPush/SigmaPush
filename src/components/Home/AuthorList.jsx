import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { listAuthor } from "../../actions/action_author";
import AuthorListItem from "./AuthorListItem";

class AuthorList extends Component {
  componentDidMount() {
    this.props.listAuthor();
  }
  render() {
    const renderList = _.map(this.props.items, item => {
      return (
        <li key={item.id} className="list-group-item pl-0 pr-0">
          <AuthorListItem item={item} />
        </li>
      );
    });
    return (
      <div>
        <h5>Popular Contributor</h5>
        <ul className="list-group list-group-flush home-author-list border-bottom">
          {renderList}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.authors
  };
}

export default connect(mapStateToProps, { listAuthor })(AuthorList);
