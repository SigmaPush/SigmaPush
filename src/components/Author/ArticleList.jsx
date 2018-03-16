import React, { Component } from 'react';

import ArticleItem from './ArticleItem';

class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authorArticles: this.props.authorArticles,
      activePage: 1,
      articlesPerPage: 3,
      lowerBound: 0,
      upperBound: 3,
      isPrevActive: false,
      isNextActive: true,
      pageNumberBound: 3,
    };

    this.handleClick = this.handleClick.bind(this);
    this.btnPrevOrNextClick = this.btnPrevOrNextClick.bind(this);
    this.setPrevAndNextClass = this.setPrevAndNextClass.bind(this);
  }

  handleClick(event) {
    const activePage = Number(event.target.id);
    this.setState({
      activePage,
    });

    this.setPrevAndNextClass(activePage);
  }

  btnPrevOrNextClick(btnId) {
    let { activePage } = this.state;
    const { lowerBound, upperBound, pageNumberBound } = this.state;

    if ((btnId === 'btnPrev' && activePage - 1 === lowerBound)) {
      this.setState({
        lowerBound: lowerBound - pageNumberBound,
        upperBound: upperBound - pageNumberBound,
      });
    } else if ((btnId === 'btnNext' && activePage === upperBound)) {
      this.setState({
        lowerBound: lowerBound + pageNumberBound,
        upperBound: upperBound + pageNumberBound,
      });
    }

    activePage = activePage + (btnId === 'btnPrev' ? -1 : 1);
    this.setState({
      activePage,
    });

    this.setPrevAndNextClass(activePage);
  }

  setPrevAndNextClass(activePage) {
    const { authorArticles, articlesPerPage } = this.state;

    this.setState({
      isPrevActive: true,
      isNextActive: true,
    });

    if (activePage === 1) {
      this.setState({
        isPrevActive: false,
      });
    }
    
    if (activePage === Math.ceil(authorArticles.length / articlesPerPage)) {
      this.setState({
        isNextActive: false,
      });
    }
  }

  render() {
    const { authorArticles, activePage, articlesPerPage, lowerBound, upperBound } = this.state;
    const { isPrevActive, isNextActive } = this.state;

    const idxOfFirstArticle = (activePage - 1) * articlesPerPage;
    const idxOfLastArticle = activePage * articlesPerPage;
    const activeArticles = authorArticles.slice(idxOfFirstArticle, idxOfLastArticle);
    const articleItems = activeArticles.map((article) => {
      return <ArticleItem
          article={article}
          key={article.title}
        />
    });

    const pages = [...Array(Math.ceil(authorArticles.length / articlesPerPage) + 1).keys()];
    const pageNumbers = pages.filter(number => {
      return number > lowerBound && number <= upperBound;
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

    const btnPrevClass = `page-link ${isPrevActive ? "" : "disabled"}`;
    const btnNextClass = `page-link ${isNextActive ? "" : "disabled"}`;

    return (
      <div>
        <ul className="list-group border border-warning">
          {articleItems}
        </ul>
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a id="btnPrev" className={btnPrevClass} type="button" aria-label="Previous" onClick={() => this.btnPrevOrNextClick('btnPrev')}>
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            {pageNumbers}
            <li className="page-item">
              <a id="btnNext" className={btnNextClass} type="button" aria-label="Next" onClick={() => this.btnPrevOrNextClick('btnNext')}>
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default ArticleList;
