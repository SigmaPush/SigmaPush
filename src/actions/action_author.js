import _ from 'lodash';

const dataArray = [
  {
    id: "author_1",
    email: "andrewng@gmial.com",
    password: "********",
    nickName: "Andrew",
    firstName: "Andrew",
    middleName: "",
    lastName: "Ng",
    title: "Computer Scientist",
    description: "Co-founder, Coursera; Adjunct Professor, Stanford University; formerly head of Baidu AI Group/Google Brain",
    type: 1, //reader: 0. author: 1
    avatar: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/2a/6192a04f1311e7ba12057425631cbc/AndrewNg-Headshot.jpg?auto=format%2Ccompress&dpr=2&w=64&h=64",
    topicTree: {},
    stats: {
      numOfSub: 3212,
      numOfPush: 142,
    },
  },
  {
    id: "author_2",
    email: "younes@gmial.com",
    password: "********",
    nickName: "Younes",
    firstName: "Younes",
    middleName: "Bensouda",
    lastName: "Mourri",
    title: "Teaching Assistant",
    description: "Mathematical & Computational Sciences, Stanford University, deeplearning.ai",
    type: 1, //reader: 0. author: 1
    avatar: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/b1/30a8207be611e7ac8279c987513482/Younes.jpg?auto=format%2Ccompress&dpr=2&w=64&h=64",
    topicTree: {},
    stats: {
      numOfSub: 3212,
      numOfPush: 142,
    },
  },
  {
    id: "author_3",
    email: "katanforoosh@gmial.com",
    password: "********",
    nickName: "Kian",
    firstName: "Kian ",
    middleName: "",
    lastName: "Katanforoosh",
    title: "Head Teaching Assistant",
    description: "Adjunct Lecturer at Stanford University, deeplearning.ai, Ecole Centrale Paris",
    type: 1, //reader: 0. author: 1
    avatar: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/da/0f3120cee911e7aa754345b53081fb/Kian-Katan-copy.jpg?auto=format%2Ccompress&dpr=2&w=64&h=64",
    topicTree: {},
    stats: {
      numOfSub: 3212,
      numOfPush: 142,
    },
  },
]

const dataObj = _.mapKeys(dataArray, 'id');

export const GET_AUTHOR = 'get_author';
export const LIST_AUTHOR = 'list_author';

export function getAuthor(id) {
  return {
    type: GET_AUTHOR,
    payload: dataObj[id],
  }
}

export function listAuthor() {
  return {
    type: LIST_AUTHOR,
    payload: dataArray,
  }
}
