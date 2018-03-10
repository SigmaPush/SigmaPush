import React from 'react';

const Article = ({match}) => (
    <div>
      Article : {match.params.id}
    </div>
  )
   
export default Article;