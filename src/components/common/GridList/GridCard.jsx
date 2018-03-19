import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GridCard extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.url = props.url;
  }
  render() {
    const articleUrl = `${this.url}${this.data.id}`;
    return (
      <div className="grid-list-item-card">
        <div className="lider-list-item-card-info">
          <div className="grid-list-item-card-img">
            <Link to={articleUrl} target="_self" aria-hidden="true">
              <img src={this.data.thumbnail} alt={this.data.title} />
            </Link>
          </div>
          <div className="grid-list-item-card-body">
            <Link to={articleUrl} target="_self" aria-hidden="true">
              <h6 className="grid-list-item-card-title">
                {this.data.title}
              </h6>
            </Link>
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
