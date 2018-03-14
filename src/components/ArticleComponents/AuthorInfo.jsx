import React, { Component } from 'react';

export default class AuthorInfo extends Component {
  render() {
    return (
      <div className="card"  style={{width: 18 + 'rem'}}>
        <img className="card-img-top" src={require('./img1.jpg')}></img>
        <div className="card-body">
          <h5 className="card-title">Author name: 小粉红</h5>
          <p className="card-text">My name is Yiping Zhong, I am also a little pink. Now I am here waiting for you. memeda</p>
          <a href="" class="btn btn-primary">Go Author</a>
        </div>
      </div>
    );
  }
}
