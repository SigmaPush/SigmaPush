import _ from 'lodash';

const dataArray = [
  {
    id: "article_1",
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
    topics: {}
  },
  {
    id: "article_2",
    author: { id: "author_1", name: "Andrew" },
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    description: "",
    thumbnail: "https://udemy-images.udemy.com/course/480x270/950390_270f_3.jpg",
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
    topics: {}
  },
  {
    id: "article_3",
    author: { id: "author_2", name: "Younes" },
    title: "Data Structures and Algorithms: Deep Dive Using Java",
    description: "",
    thumbnail: "https://udemy-images.udemy.com/course/480x270/1419186_5b21_2.jpg",
    content: "",
    cat: { id: "cat2", name: "Algorithm" },
    tag: {
      "tag1": "java",
      "tag2": "dynamic programming",
      "tag3": "multi-threading",
    },
    stats: {
      view: 12345,
      fav: 992,
      like: 3212,
    },
    topics: {}
  },
  {
    id: "article_4",
    author: { id: "author_2", name: "Younes" },
    title: "Advanced Algorithms in Java",
    description: "",
    thumbnail: "https://udemy-images.udemy.com/course/480x270/427148_531f_6.jpg",
    content: "",
    cat: { id: "cat2", name: "Algorithm" },
    tag: {
      "tag1": "java",
      "tag2": "dynamic programming",
      "tag3": "multi-threading",
    },
    stats: {
      view: 12345,
      fav: 992,
      like: 3212,
    },
    topics: {}
  },
  {
    id: "article_5",
    author: { id: "author_3", name: "Kian" },
    title: "Learn Database Design with MySQL",
    description: "",
    thumbnail: "https://udemy-images.udemy.com/course/480x270/172572_3d16_6.jpg",
    content: "",
    cat: { id: "cat3", name: "Database" },
    tag: {
      "tag1": "java",
      "tag2": "MySQL",
    },
    stats: {
      view: 12345,
      fav: 992,
      like: 3212,
    },
    topics: {}
  },
  {
    id: "article_6",
    author: { id: "author_3", name: "Kian" },
    title: "Relational Database Design",
    description: "",
    thumbnail: "https://udemy-images.udemy.com/course/480x270/299398_1a2c_2.jpg",
    content: "",
    cat: { id: "cat3", name: "Database" },
    tag: {
      "tag1": "java",
      "tag2": "MySQL",
    },
    stats: {
      view: 12345,
      fav: 992,
      like: 3212,
    },
    topics: {}
  },
];

const dataObj = _.mapKeys(dataArray, 'id');

export const GET_ARTICLE = 'get_article';
export const LIST_ARTICLE = 'list_article';

export function getArticle(id) {
  return {
    type: GET_ARTICLE,
    payload: dataObj[id],
  }
}

export function listArticle() {
  return {
    type: LIST_ARTICLE,
    payload: dataArray,
  }
}
