import React from "react";

function BlogContent(props) {
  return <div id="blog-content">
    <h1>{props.articleText}</h1>
    <p>{props.minutesToRead}</p>
  </div>;
}

export default BlogContent;
