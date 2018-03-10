import React from 'react';

const Author = ({match}) => (
    <div>
      Author : {match.params.id}
    </div>
  )
   
export default Author;