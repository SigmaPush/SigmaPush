import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { listCatalog } from "../../../actions/action_catalog";
import { listTag } from "../../../actions/action_tag";

class SearchFilter extends Component {
  componentDidMount() {
    this.props.listCatalog();
    this.props.listTag();
  }
  
  render() {
    const renderCatalogs = _.map(this.props.catalogs, item => {
      return (
        <div key={item.id} className="p-1">
          <h6>
            <button type="button" className="btn btn-outline-secondary">
              {item.name}
            </button>
          </h6>
        </div>
      );
    });

    const renderTags = _.map(this.props.tags, item => {
      return (
        <div key={item.id} className="p-1">
          <button type="button" className="btn btn-outline-secondary btn-sm">
            {item.name}
          </button>
        </div>
      );
    });

    return (
      <div className="container-fluid bg-light">
        <div className="pl-5 pt-3">
          <div className="row">
            <div className="col-md-8 mb-1">
              <div className="text-secondary">Catalog</div>
              <div className="d-flex flex-wrap">{renderCatalogs}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mb-1">
              <div className="text-secondary">Tags</div>
              <div className="d-flex flex-wrap">{renderTags}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    catalogs: state.catalogs,
    tags: state.tags
  };
}

export default connect(mapStateToProps, { listCatalog, listTag })(SearchFilter);
