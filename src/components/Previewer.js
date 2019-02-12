import React from 'react';
let marked = require('marked')

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

const Previewer = props => {
  return (
    <div className="preview-wrapper">
      <h1>Preview</h1>
      <hr />
      <div
        className="preview"
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(props.toPreview, { renderer: renderer }) }} />
    </div>
  )
}

export default Previewer;