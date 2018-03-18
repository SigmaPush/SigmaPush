import React, { Component } from 'react';

class GridCard extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  render() {
    return (
      <div className="grid-list-item-card">
        <div className="lider-list-item-card-info">
          <div className="grid-list-item-card-img">
            <a href="" target="_self" aria-hidden="true">
              <img src={this.data.thumbnail} alt={this.data.title} />
            </a>
          </div>
          <div className="grid-list-item-card-body">
            <a href={this.data.url} target="_self" aria-hidden="true">
              <h6 className="grid-list-item-card-title">
                {this.data.title}
              </h6>
            </a>
            <div className="grid-list-item-card-author">
              {this.data.author.name}
            </div>
            <div className="grid-list-item-card-data">
              {this.data.stats.view} views
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GridCard;
