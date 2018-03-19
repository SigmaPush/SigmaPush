import React, { Component } from 'react';

export default class ToolBar extends Component {
  render() {
    return (
      <div className="btn-group-vertical">
        <button type="button" className="btn btn-secondary">Like</button>
        <button type="button" className="btn btn-secondary">Share</button>
        <button type="button" className="btn btn-secondary">Fav</button>
        <button type="button" className="btn btn-secondary">Comm</button>
      </div>
    );
  }
}

