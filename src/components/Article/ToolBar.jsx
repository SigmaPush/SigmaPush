import React, { Component } from 'react';

export default class ToolBar extends Component {
  render() {
    return (
      <div class="btn-group-vertical">
        <button type="button" class="btn btn-secondary">1</button>
        <button type="button" class="btn btn-secondary">2</button>
        <button type="button" class="btn btn-secondary">3</button>
        <button type="button" class="btn btn-secondary">4</button>
        <button type="button" class="btn btn-secondary">5</button>
      </div>
    );
  }
}

