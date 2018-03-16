import React, { Component } from 'react';

class AuthorListItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="home-author-list-item">
        <div className="row no-gutters">
          <div className="col-md-3 p-2">
            <a href="" target="_self" aria-hidden="true">
              <img className="rounded-circle img-fluid" src={item.avatar} alt="avatar" />
            </a>
          </div>
          <div className="col-md-9 p-1">
            <div className="row justify-content-between align-middle">
              <div className="col-7">
                <a href="" target="_self" aria-hidden="true" className="text-dark">
                  {item.name}
                </a>
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
                  <small>{item.numOfSub} subscribers</small>
                </a>
              </div>
              <div className="col-5">
                <a href="" target="_self" aria-hidden="true" className="text-secondary">
                  <small>{item.numOfPush} push</small>
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
