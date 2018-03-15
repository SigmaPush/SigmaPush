import React, { Component } from 'react';

import TopicDoughnut from './TopicDoughnut';
import ArticleList from './ArticleList';

const authorTopics = [
  {
    topic: 'Algorithms',
    number: 100,
    subTopics: [
      {
        topic: 'binarySearch',
        number: 20,
        subTopics: [],
      },
      {
        topic: 'BFS',
        number: 35,
        subTopics: [
          {
            topic: 'Graph',
            number: 17,
            subTopics: [],
          },
          {
            topic: 'Tree',
            number: 18,
            subTopics: [],
          },
        ],
      },
      {
        topic: 'Dynamic Programming',
        number: 45,
        subTopics:[],
      },
    ]
  },
  {
    topic: 'ML',
    number: 34,
    subTopics: [],
  },
  {
    topic: 'OS',
    number: 46,
    subTopics: [],
  },
];
const activeTopics = ['Algorithms'];
const authorArticles = [
  {
    title: 'Article 1',
    catalog: 'Algorithms',
    tags: ['1', '2', '3', '4', '5'],
    topic: 'Algorithms',
    subTopic_1: 'Graph',
    subTopic_2: 'BFS',
    imgUrl: 'https://cdn-images-1.medium.com/fit/c/152/156/1*D2Nx7mm3Q-OENTG_Vq_btA.jpeg',
    description: 'lalalala1',
  },
  {
    title: 'Article 2',
    catalog: 'Algorithms',
    tags: ['1', '2', '3', '4', '5'],
    topic: 'Algorithms',
    subTopic_1: 'Graph',
    subTopic_2: 'BFS',
    imgUrl: 'https://cdn-images-1.medium.com/fit/c/152/156/1*D2Nx7mm3Q-OENTG_Vq_btA.jpeg',
    description: 'lalalala2',
  },
  {
    title: 'Article 3',
    catalog: 'Algorithms',
    tags: ['1', '2', '3', '4', '5'],
    topic: 'Algorithms',
    subTopic_1: 'Graph',
    subTopic_2: 'BFS',
    imgUrl: 'https://cdn-images-1.medium.com/fit/c/152/156/1*D2Nx7mm3Q-OENTG_Vq_btA.jpeg',
    description: 'lalalala3',
  },
  {
    title: 'Article 4',
    catalog: 'Algorithms',
    tags: ['1', '2', '3', '4', '5'],
    topic: 'Algorithms',
    subTopic_1: 'Graph',
    subTopic_2: 'BFS',
    imgUrl: 'https://cdn-images-1.medium.com/fit/c/152/156/1*D2Nx7mm3Q-OENTG_Vq_btA.jpeg',
    description: 'lalalala4',
  },
  {
    title: 'Article 5',
    catalog: 'Algorithms',
    tags: ['1', '2', '3', '4', '5'],
    topic: 'Algorithms',
    subTopic_1: 'Graph',
    subTopic_2: 'DFS',
    imgUrl: 'https://cdn-images-1.medium.com/fit/c/152/156/1*D2Nx7mm3Q-OENTG_Vq_btA.jpeg',
    description: 'lalalala5',
  },
];

class AuthorTopics extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center pt-4">
          <div className="col-md-4">
            <TopicDoughnut authorTopics={authorTopics} />
          </div>
          <div className="col-md-6">
            <div>
              <ArticleList activeTopics={activeTopics} authorArticles={authorArticles} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorTopics;
