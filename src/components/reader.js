import React from 'react';

const Reader = ({match}) => (
    <div>
      Reader : {match.params.id}
    </div>
  )
   
export default Reader;