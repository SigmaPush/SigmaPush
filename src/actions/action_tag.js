const dataArray = [
  {
    id: 'tag1',
    name: 'face recognition',
  },
  {
    id: 'tag2',
    name: 'python',
  },
  {
    id: 'tag3',
    name: 'tensorflow',
  },
  {
    id: 'tag4',
    name: 'java',
  },
  {
    id: 'tag5',
    name: 'dynamic programming'
  },
  {
    id: 'tag6',
    name: 'multi-threading'
  },
  {
    id: 'tag7',
    name: 'MySQL',
  },
];

export const LIST_TAG = 'list_tag';

export function listTag() {
  return {
    type: LIST_TAG,
    payload: dataArray,
  };
};
