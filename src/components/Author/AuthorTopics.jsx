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
    description: 'lalalala2 duhakdas dshajkds dsakhdjas jashsa shakjsahdkas dkashdahdasd h dhsajdhkad shjdas h dshj dshjk hjskdah ',
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
            {/* <div className="btn-group justify-content-end" role="group" aria-label="Sort Buttons">
              <div><button type="button" className="btn btn-secondary">Sort1</button></div>
              <div><button type="button" className="btn btn-secondary">Sort2</button></div>
              <div><button type="button" className="btn btn-secondary">Sort3</button></div>
            </div> */}
            <div>
              <ArticleList activeTopics={activeTopics} authorArticles={authorArticles} />
            </div>
            <br/>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="/" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="/">1</a></li>
                  <li className="page-item"><a className="page-link" href="/">2</a></li>
                  <li className="page-item"><a className="page-link" href="/">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="/" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorTopics;
