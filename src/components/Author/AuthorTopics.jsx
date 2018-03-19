import React, { Component } from 'react';
import _ from 'lodash';

import TopicDoughnut from './TopicDoughnut';
import ArticleList from './ArticleList';
import Pagination from './Pagination';

const authorArticles = [
  {
    id: "article_1",
    author: { id: "author_1", name: "Andrew" },
    title: "Complete Guide to TensorFlow for Deep Learning with Python",
    description: "short",
    thumbnail: "https://udemy-images.udemy.com/course/480x270/1326292_4dcf.jpg",
    content: "",
    cat: { id: "cat1", name: "Deep Learning" },
    tag: {
      "tag1": "face recognition",
      "tag2": "python",
      "tag3": "tensorflow",
    },
    stats: {
      view: 12345,
      fav: 992,
      like: 3212,
    },
    topics: ['Algorithms', 'Graph', "BFS",],
  },
  {
    id: "article_2",
    author: { id: "author_1", name: "Andrew" },
    title: "Complete Guide to TensorFlow for Deep Learning with Python",
    description: "",
    thumbnail: "https://udemy-images.udemy.com/course/480x270/1326292_4dcf.jpg",
    content: "",
    cat: { id: "cat1", name: "Deep Learning" },
    tag: {
      "tag1": "face recognition",
      "tag2": "python",
      "tag3": "tensorflow",
    },
    stats: {
      view: 12345,
      fav: 992,
      like: 3212,
    },
    topics: ['Algorithms', 'Graph', 'DFS',],
  },
  {
    id: "article_3",
    author: { id: "author_1", name: "Andrew" },
    title: "Complete Guide to TensorFlow for Deep Learning with Python",
    description: "",
    thumbnail: "https://udemy-images.udemy.com/course/480x270/1326292_4dcf.jpg",
    content: "",
    cat: { id: "cat1", name: "Deep Learning" },
    tag: {
      "tag1": "face recognition",
      "tag2": "python",
      "tag3": "tensorflow",
    },
    stats: {
      view: 12345,
      fav: 992,
      like: 3212,
    },
    topics: ['Algorithms', 'Tree', 'BFS'],
  },
  {
    id: "article_4",
    author: { id: "author_1", name: "Andrew" },
    title: "Complete Guide to TensorFlow for Deep Learning with Python",
    description: "",
    thumbnail: "https://udemy-images.udemy.com/course/480x270/1326292_4dcf.jpg",
    content: "",
    cat: { id: "cat1", name: "Deep Learning" },
    tag: {
      "tag1": "face recognition",
      "tag2": "python",
      "tag3": "tensorflow",
    },
    stats: {
      view: 12345,
      fav: 992,
      like: 3212,
    },
    topics: ['ML', 'Algorithms', 'SVM'],
  },
  {
    id: "article_5",
    author: { id: "author_1", name: "Andrew" },
    title: "Complete Guide to TensorFlow for Deep Learning with Python",
    description: "",
    thumbnail: "https://udemy-images.udemy.com/course/480x270/1326292_4dcf.jpg",
    content: "",
    cat: { id: "cat1", name: "Deep Learning" },
    tag: {
      "tag1": "face recognition",
      "tag2": "python",
      "tag3": "tensorflow",
    },
    stats: {
      view: 12345,
      fav: 992,
      like: 3212,
    },
    topics: ['NLP', 'Algorithms', 'Other'],
  },
];

class AuthorTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      articlesPerPage: 2,
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
    const filteredArticles = authorArticles.reduce((acc, cur) => {
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
    const { activePage, articlesPerPage } = this.state;

    // Filter active items for current page
    const idxOfFirstArticle = (activePage - 1) * articlesPerPage;
    const idxOfLastArticle = activePage * articlesPerPage;
    const activeArticles = filteredArticles.slice(idxOfFirstArticle, idxOfLastArticle);

    return activeArticles;
  }

  getDoughnutData() {
    const topics = authorArticles.reduce((acc, cur) => {
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
      (topic => topic[topicLevel])
    );

    const labels = Object.keys(curTopics);
    const counts = Object.values(curTopics);

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
    const filteredArticles = this.calculateFilteredArticles();
    const activeArticles = this.calculateActiveArticles(filteredArticles);

    const { activePage, articlesPerPage, selectedTopics } = this.state;
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
            <Pagination className="fixed-bottom"
              filteredArticles={filteredArticles}
              activePage={activePage}
              articlesPerPage={articlesPerPage}
              onClick = {(event) => this.handleClick(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorTopics;
