import React, { Component } from "react";
import "./Article.css";

export default class References extends Component {
  render() {
    return (
      <div className="border article-reference">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#comment"
              role="tab"
              aria-controls="comment"
              aria-selected="true"
            >
              Comment
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#resource"
              role="tab"
              aria-controls="resource"
              aria-selected="false"
            >
              Resource
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#reference"
              role="tab"
              aria-controls="reference"
              aria-selected="false"
            >
              Reference
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="comment"
            role="tabpanel"
            aria-labelledby="comment-tab"
          >
            This is something related to comment
          </div>
          <div
            className="tab-pane fade"
            id="resource"
            role="tabpanel"
            aria-labelledby="resource-tab"
          >
            This is something related to resources
          </div>
          <div
            className="tab-pane fade"
            id="reference"
            role="tabpanel"
            aria-labelledby="reference-tab"
          >
            This is something related to reference
          </div>
        </div>
      </div>
    );
  }
}
