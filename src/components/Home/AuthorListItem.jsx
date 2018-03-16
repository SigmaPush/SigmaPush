import React, { Component } from 'react';

class AuthorListItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="home-author-list-item border-top">
        <div class="row no-gutters mt-1 mb-1">
          <div class="col-md-3 p-2">
            <a href="" target="_self" aria-hidden="true">
              <img className="rounded-circle img-fluid" src={item.avatar} alt="avatar" />
            </a>
          </div>
          <div class="col-md-9 p-1">
            <div class="row justify-content-between align-middle">
              <div class="col-7">
                <a href="" target="_self" aria-hidden="true" class="text-dark">
                  {item.name}
                </a>
              </div>
              <div class="col-5 text-right">
                <a href="" target="_self" aria-hidden="true" className="text-secondary">
                  <small><span class="oi oi-plus"></span>&nbsp;<span className="font-weight-bold">Subscribe</span></small>
                </a>
              </div>
            </div>
            <div class="row font-weight-bold">
              <div class="col">
                <a href="" target="_self" aria-hidden="true" class="text-secondary">
                  <small>{item.numOfSub} subscribers</small>
                </a>
              </div>
              <div class="col-5">
                <a href="" target="_self" aria-hidden="true" class="text-secondary">
                  <small>{item.numOfPush} push</small>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col">
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
