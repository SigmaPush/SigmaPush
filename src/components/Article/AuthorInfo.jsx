import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

export default class AuthorInfo extends Component {
  render() {
    const author = this.props.data;
    return (
      <div className="author-info d-none d-sm-block col-3">
        <img className="card-img-top" src={author.avatar} alt=" Loading Error" />
        <div className="card-body">
          <h5 className="card-title">{author.name}</h5>
          <Link to={`/Author/${author.id}`} className="btn btn-primary">Go Author</Link>
        </div>
      </div>
    );
  }
}
