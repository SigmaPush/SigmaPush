import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectItem } from '../../actions/index';
import GridList from '../common/GridList';

class FeaturedList extends Component {
  render() {
    return (
      <div>
        <GridList title={this.props.title} containerWidth={this.props.containerWidth} items={this.props.items} mode={this.props.mode}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        items: state.featuredItems
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectItem: selectItem }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedList);
