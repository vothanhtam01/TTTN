import React from 'react';


const url = window.location.protocol + "//" + window.location.host;

const Comment = (props) => {

  return (
    <div className="tag__text">
      <div className="fb-comments" data-href={url + "/detail/" + props.id} data-width="200px" data-numposts="5"></div>
    </div>
  )
}

export default Comment;