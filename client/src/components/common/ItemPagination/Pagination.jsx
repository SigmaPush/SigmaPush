import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick && this.props.onClick(event);
  }

  calculatePageBounds() {
    const { activePage, pageNumberBound, filteredItems, itemsPerPage } = this.props;
    const pageNumberLimit = Math.ceil(filteredItems.length / itemsPerPage);
    const pageLowerBound = Math.max(0, Math.min(pageNumberLimit - pageNumberBound, activePage - Math.floor(pageNumberBound / 2) - 1));
    const pageUpperBound = Math.min(pageNumberLimit, pageLowerBound + pageNumberBound);

    return { pageLowerBound, pageUpperBound };
  }

  getPrevAndNextClass() {
    const { activePage, filteredItems, itemsPerPage } = this.props;

    let isPrevActive = true;
    let isNextActive = true;

    if (activePage === 1) {
      isPrevActive = false;
    }

    if (activePage === Math.ceil(filteredItems.length / itemsPerPage)) {
      isNextActive = false;
    }

    return { isPrevActive, isNextActive };
  }

  calculatePageNumbers(pageLowerBound, pageUpperBound) {
    const { filteredItems, activePage, itemsPerPage } = this.props;

    // Calculate current page numbers
    const pages = [...Array(Math.ceil(filteredItems.length / itemsPerPage) + 1).keys()];
    const pageNumbers = pages.filter(number => {
      return number > pageLowerBound && number <= pageUpperBound;
    }).map(number => {
      const pageNoClass = `page-item ${(activePage === number) ? "active" : ""}`;
      return (
        <li key={number} className={pageNoClass} id={number}>
          <a id={number} className="page-link" onClick={this.handleClick}>
            {number}
          </a>
        </li>
      );
    });

    return pageNumbers;
  }

  render() {
    const { pageLowerBound, pageUpperBound } = this.calculatePageBounds();
    const pageNumbers = this.calculatePageNumbers(pageLowerBound, pageUpperBound);

    // Set Prev and Next class
    const { isPrevActive, isNextActive } = this.getPrevAndNextClass();
    const btnPrevClass = `page-link ${isPrevActive ? "" : "disabled"}`;
    const btnNextClass = `page-link ${isNextActive ? "" : "disabled"}`;

    return (
      <div>
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a id="btnPrev" className={btnPrevClass} type="button" aria-label="Previous" onClick={this.handleClick}>
                &laquo;
              </a>
            </li>
            {pageNumbers}
            <li className="page-item">
              <a id="btnNext" className={btnNextClass} type="button" aria-label="Next" onClick={this.handleClick}>
                &raquo;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
