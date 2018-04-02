import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAuthor } from '../../actions/action_author';

class AuthorProfile extends Component {
  componentDidMount() {
    const { authorId } = this.props;
    this.props.getAuthor(authorId);
  }

  render() {
    const { author } = this.props;
    if (!author) {
      return <div>Loading</div>;
    }

    const { nickName, avatar, description } = author;
    return (
      <div className="row justify-content-end border border-warning m-1">
        <div className="col-md-6 border border-danger mx-1">
          <h4>{nickName}</h4>
          <small>{description}</small>
        </div>
        <div className="col-md-5 d-flex align-items-center border border-danger mx-1">
          <img className="img-fluid" src={avatar} alt="avatar" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    author: state.authors[ownProps.authorId],
  };
}

export default connect(mapStateToProps, { getAuthor })(AuthorProfile);
