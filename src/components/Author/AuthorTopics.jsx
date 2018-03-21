import React, { Component } from 'react';
import _ from 'lodash';

import TopicDoughnut from './TopicDoughnut';
import ArticleList from './ArticleList';
import Pagination from './Pagination';


const paginationSetting = {
  articlesPerPage: 2,
  pageNumberBound: 5,
}

class AuthorTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      topicLevel: 0,
      selectedTopics:[],
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleDoughnutClick = this.handleDoughnutClick.bind(this);
  }

  handleClick(event) {
    const btnId = event.target.id;
    const activePage = this.getActivePage(btnId);

    this.setState({
      activePage,
    });
  }

  getActivePage(btnId) {
    if (Number.isInteger(Number(btnId))) {
      return Number(btnId);
    } else {
      return this.state.activePage + (btnId === 'btnPrev' ? -1 : 1);
    }
  }

  calculateFilteredArticles() {
    const { selectedTopics } = this.state;
    const { authorArticles } = this.props;
    const filteredArticles = _.values(authorArticles).reduce((acc, cur) => {
      if (selectedTopics.every((topic, idx) => {
        return cur['topics'][idx] === topic;
      })) {
        acc.push(cur);
      }
      return acc;
    }, []);

    return filteredArticles;
  }

  calculateActiveArticles(filteredArticles) {
    const { activePage } = this.state;
    const { articlesPerPage } = paginationSetting;

    // Filter active items for current page
    const idxOfFirstArticle = (activePage - 1) * articlesPerPage;
    const idxOfLastArticle = activePage * articlesPerPage;
    const activeArticles = filteredArticles.slice(idxOfFirstArticle, idxOfLastArticle);

    return activeArticles;
  }

  getDoughnutData() {
    // FIXME: the labels displayed are not decided
    const { authorArticles } = this.props;
    const topics = _.values(authorArticles).reduce((acc, cur) => {
      acc.push(cur['topics']);
      return acc;
    }, []);
    const { topicLevel, selectedTopics } = this.state;
    const curTopics = _.countBy(
      (
        topics.filter((topic, idx) => {
          return selectedTopics.every((selectedTopic, idx) => {
            return topic[idx] === selectedTopic;
          });
        })
      ),
      (topic => topic[Math.min(2, topicLevel)])
    );

    const labels = _.keys(curTopics);
    const counts = _.values(curTopics);

    return { labels, counts };
  }

  handleDoughnutClick(topic) {
    let { topicLevel, selectedTopics } = this.state;
    if (topic === '' && selectedTopics.length > 0) {
      topicLevel = topicLevel - 1;
      selectedTopics.pop();
    } else if (topic !== '' && selectedTopics.length < 3) {
      topicLevel = topicLevel + 1;
      selectedTopics.push(topic);
    }

    this.setState({
      topicLevel,
      selectedTopics,
      activePage: 1,
    });
  }

  render() {
    const { authorArticles } = this.props;
    if (_.isEmpty(authorArticles)) {
      return <div>Loading</div>;
    }

    const filteredArticles = this.calculateFilteredArticles();
    const activeArticles = this.calculateActiveArticles(filteredArticles);

    const { activePage, selectedTopics } = this.state;
    const { articlesPerPage, pageNumberBound } = paginationSetting;
    const { labels, counts } = this.getDoughnutData();
    const topic = _.last(selectedTopics);

    return (
      <div className="container border border-primary mb-2">
        <div className="row justify-content-md-around m-2">
          {/* This part only show topics with  article number not 0*/}
          <div className="col-md-4 border border-success">
            <TopicDoughnut 
              counts={counts}
              labels={labels}
              topic={topic}
              onClick={(topic) => this.handleDoughnutClick(topic)}
            />
          </div>
          <div className="col-md-7 border border-success">
            <ArticleList activeArticles={activeArticles} />
            <Pagination
              filteredArticles={filteredArticles}
              activePage={activePage}
              articlesPerPage={articlesPerPage}
              pageNumberBound={pageNumberBound}
              onClick = {(event) => this.handleClick(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorTopics;
