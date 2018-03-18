import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLowerBound:0,
      pageUpperBound: 3,
      isPrevActive: false,
      isNextActive: false,
      pageNumberBound: 3,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setPrevAndNextClass(1);
  }

  handleClick(event) {
    Promise.resolve(this.props.onClick && this.props.onClick(event))
      .then(() => {
        const { activePage } = this.props;
        this.updatePageBound(activePage);
        this.setPrevAndNextClass(activePage);
      });
  }

  getActivePage(btnId) {
    if (Number.isInteger(Number(btnId))) {
      return Number(btnId);
    } else {
      return this.props.activePage + (btnId === 'btnPrev' ? -1 : 1);
    }
  }

  updatePageBound(activePage) {
    const { pageLowerBound, pageUpperBound, pageNumberBound } = this.state;
    if (activePage === pageLowerBound) {
      this.setState({
        pageLowerBound: pageLowerBound - pageNumberBound,
        pageUpperBound: pageUpperBound - pageNumberBound,
      });
    } else if (activePage - 1 === pageUpperBound) {
      this.setState({
        pageLowerBound: pageLowerBound + pageNumberBound,
        pageUpperBound: pageUpperBound + pageNumberBound,
      });
    }
  }

  setPrevAndNextClass(activePage) {
    const { filteredArticles, articlesPerPage } = this.props;

    this.setState({
      isPrevActive: true,
      isNextActive: true,
    });

    if (activePage === 1) {
      this.setState({
        isPrevActive: false,
      });
    }
    
    if (activePage === Math.ceil(filteredArticles.length / articlesPerPage)) {
      this.setState({
        isNextActive: false,
      });
    }
  }

  calculatePageNumbers() {
    const { filteredArticles, activePage, articlesPerPage } = this.props;
    const { pageLowerBound, pageUpperBound } = this.state;

    // Calculate current page numbers
    const pages = [...Array(Math.ceil(filteredArticles.length / articlesPerPage) + 1).keys()];
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
    const pageNumbers = this.calculatePageNumbers();

    // Set Prev and Next class
    const { isPrevActive, isNextActive } = this.state;
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
