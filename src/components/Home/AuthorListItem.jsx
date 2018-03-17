import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthorListItem extends Component {
  render() {
    const item = this.props.item;
    const authorUrl = `/author/${item.id}`;
    return (
      <div className="home-author-list-item">
        <div className="row no-gutters">
          <div className="col-md-3 p-2">
            <Link to={authorUrl}>
              <img className="rounded-circle img-fluid" src={item.avatar} alt="avatar" />
            </Link>
          </div>
          <div className="col-md-9 p-1">
            <div className="row justify-content-between align-middle">
              <div className="col-7">
                <Link to={authorUrl}>
                  <span className="text-dark">{item.nickName}</span>
                </Link>
              </div>
              <div className="col-5 text-right">
                <a href="" target="_self" aria-hidden="true" className="text-secondary">
                  <small><span className="oi oi-plus"></span>&nbsp;<span className="font-weight-bold">Subscribe</span></small>
                </a>
              </div>
            </div>
            <div className="row font-weight-bold">
              <div className="col">
                <a href="" target="_self" aria-hidden="true" className="text-secondary">
                  <small>{item.stats.numOfSub} subscribers</small>
                </a>
              </div>
              <div className="col-5">
                <a href="" target="_self" aria-hidden="true" className="text-secondary">
                  <small>{item.stats.numOfPush} push</small>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <small>{item.description}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorListItem;
