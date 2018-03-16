import React, { Component } from 'react';
import GridCard from './GridCard';
import './GridList.css';

class GridList extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.containerWidth = props.containerWidth;
    this.itemWidth = props.itemWidth ? props.itemWidth : 214;
    this.items = props.items;
    this.mode = props.mode ? props.mode : "slider";

    this.isShowAll = false;
    this.xOffset = 0;
    this.maxWith = this.items.length * this.itemWidth;
    this.state = {
      style: this.getStyleObj(),
      isShowAll: false,
      isShowPreBtn: false,
      isShowNextBtn: true,
    };
    this.getStyleObj = this.getStyleObj.bind(this);
    this.onClickPre = this.onClickPre.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
    this.onToggerShow = this.onToggerShow.bind(this);
    this.ActionButtons = this.ActionButtons.bind(this);
  }
  getStyleObj() {
    return {
      transform: `translateX(${this.xOffset}px)`,
      height: this.isShowAll ? "auto" : "245px",
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
  renderListItem(item) {
    return (
      <div className="grid-list-item" key={item.id} style={{ width: this.itemWidth }}>
        <GridCard data={item} />
      </div>
    );
  }
  onToggerShow(event) {
    this.isShowAll = !this.isShowAll;
    const style = this.getStyleObj();
    console.log(style);
    this.setState({
      isShowAll: this.isShowAll,
      style: style,
    });
  }
  ActionButtons() {
    if (this.mode === 'slider') {
      return (
        <div>
          {this.state.isShowPreBtn &&
            <a role="button" onClick={this.onClickPre} className="grid-list-slider-btn grid-list-slider-btn-pre ">
              <span className="oi oi-chevron-left"></span>
              <span className="sr-only">Previous items</span>
            </a>
          }
          {this.state.isShowNextBtn &&
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
          <div className="grid-list-bottom-btn" onClick={this.onToggerShow} role="button" >{this.state.isShowAll ? "SHOW LESS" : "SHOW MORE"}</div>
        </div>
      );
    }
  }
  render() {
    const listClass = `grid-list grid-list-${this.containerWidth} grid-list-${this.mode}`;
    return (
      <div className={listClass} ref={(dom) => { this.listWrapper = dom; }}>
        <h5>{this.title}</h5>
        <div className="grid-list-mask">
          <div className="grid-list-item-group" style={this.state.style}>
            {this.items.map(this.renderListItem)}
          </div>
        </div>
        {this.ActionButtons()}
        <div className="grid-list-bottom-line" />
      </div>
    );
  }
}

export default GridList;
