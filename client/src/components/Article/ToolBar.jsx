import React, { Component } from "react";

export default class ToolBar extends Component {
  render() {
    return (
      <div className="btn-group-vertical">
        <button type="button" className="btn btn-primary">
          Like
        </button>
        <button type="button" className="btn btn-primary">
          Share
        </button>
        <button type="button" className="btn btn-primary">
          Fav
        </button>
        <button type="button" className="btn btn-primary">
          Comm
        </button>
      </div>
    );
  }
}
