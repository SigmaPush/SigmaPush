import React, { Component } from 'react';
import AuthorImage from './img1.jpg'
import './Article.css';

export default class AuthorInfo extends Component {
  render() {
    return (
      <div className="author-info d-none d-xl-block col-3">
        <img className="card-img-top" src={AuthorImage} alt=" Loading Error" />
        <div className="card-body">
          <h5 className="card-title">小粉红</h5>
          <p className="card-text">My name is Yiping Zhong, I am also a little pink. Now I am here waiting for you. memeda</p>
          <a href="" className="btn btn-primary">Go Author</a>
        </div>
      </div>
    );
  }
}
