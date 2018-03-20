import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAuthor } from "../../actions/action_author";
import "./Article.css";

class AuthorInfo extends Component {
  componentDidMount() {
    const { id } = this.props.data;
    this.props.getAuthor(id);
  }

  render() {
    const { author } = this.props;
    if (!author) {
      return <div>Loading...</div>;
    }
    return (
      <div className="author-info d-none d-xl-block">
        <img
          className="card-img-top"
          src={author.avatar}
          alt=" Loading Error"
        />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">
            {author.firstName} {author.lastName}
          </h5>
          <Link
            to={`/Author/${author.id}`}
            className="btn btn-primary d-flex justify-content-center"
          >
            Go Author
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authors }, ownProps) {
  return {
    author: authors[ownProps.data.id]
  };
}

export default connect(mapStateToProps, { getAuthor })(AuthorInfo);
