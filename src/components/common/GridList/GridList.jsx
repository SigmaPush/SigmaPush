import React, { Component } from 'react';
import _ from 'lodash';
import GridCard from './GridCard';
import './GridList.css';

class GridList extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.url = props.url;
    // containerWidh: 9, 10, 12 conresponsing to bootstrap col
    this.containerWidth = props.containerWidth;
    this.itemWidth = props.itemWidth ? props.itemWidth : 214;
    this.items = props.items;
    // mode: table, slider
    this.mode = props.mode ? props.mode : "slider";

    this.xOffset = 0;
    this.maxWith = 0;
    this.state = {
      style: this.getStyleObj(),
      isShowAll: false,
      isShowPreBtn: false,
      isShowNextBtn: true,
    };
    this.getStyleObj = this.getStyleObj.bind(this);
    this.onClickPre = this.onClickPre.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onToggleShow = this.onToggleShow.bind(this);
    this.renderActionButtons = this.renderActionButtons.bind(this);
    this.calculateWith = this.calculateWith.bind(this);
  }
  getStyleObj() {
    const isShowAll = this.state && this.state.isShowAll;
    return {
      transform: `translateX(${this.xOffset}px)`,
      height: isShowAll ? "auto" : "245px",
    };
  }
  onClickPre(event) {
    if (this.xOffset >= 0) return;
    this.xOffset += this.itemWidth;
    let hasNext = this.maxWith + this.xOffset > this.listWrapper.clientWidth;

    this.setState({
      style: this.getStyleObj(),
      isShowPreBtn: this.xOffset < 0,
      isShowNextBtn: hasNext,
    });
  }
  onClickNext(event) {
    const outerWidth = this.listWrapper.clientWidth;
    if (this.maxWith + this.xOffset <= outerWidth) return;
    this.xOffset -= this.itemWidth;
    let hasNext = this.maxWith + this.xOffset > outerWidth;
    this.setState({
      style: this.getStyleObj(),
      isShowPreBtn: this.xOffset < 0,
      isShowNextBtn: hasNext,
    });
  }
  onToggleShow(event) {
    let { isShowAll } = this.state;
    isShowAll = !isShowAll;
    const style = this.getStyleObj();
    this.setState({
      isShowAll: isShowAll,
      style: style,
    });
  }
  renderActionButtons() {
    const { isShowAll, isShowPreBtn, isShowNextBtn } = this.state;
    if (this.mode === 'slider') {
      return (
        <div>
          {isShowPreBtn &&
            <a role="button" onClick={this.onClickPre} className="grid-list-slider-btn grid-list-slider-btn-pre ">
              <span className="oi oi-chevron-left"></span>
              <span className="sr-only">Previous items</span>
            </a>
          }
          {isShowNextBtn &&
            <a role="button" onClick={this.onClickNext} className="grid-list-slider-btn grid-list-slider-btn-next ">
              <span className="oi oi-chevron-right"></span>
              <span className="sr-only">Next items</span>
            </a>
          }
        </div>
      );
    } else {
      return (
        <div>
          <div className="grid-list-bottom-btn" onClick={this.onToggerShow} role="button" >{isShowAll ? "SHOW LESS" : "SHOW MORE"}</div>
        </div>
      );
    }
  }
  calculateWith(numOfItems) {
    this.maxWith = numOfItems * this.itemWidth;
  }
  render() {
    const listClass = `grid-list grid-list-${this.containerWidth} grid-list-${this.mode}`;
    const { items } = this.props;
    this.calculateWith(_.size(items));
    const renderList = _.map(items, item => {
      return (
        <div className="grid-list-item" key={item.id} style={{ width: this.itemWidth }}>
          <GridCard data={item} url={this.url} />
        </div>
      );
    });
    return (
      <div className={listClass} ref={(dom) => { this.listWrapper = dom; }}>
        <h5>{this.title}</h5>
        <div className="grid-list-mask">
          <div className="grid-list-item-group" style={this.state.style}>
            {renderList}
          </div>
        </div>
        {this.renderActionButtons()}
        <div className="grid-list-bottom-line" />
      </div>
    );
  }
}

export default GridList;
