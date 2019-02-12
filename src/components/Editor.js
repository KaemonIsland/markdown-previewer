import React from 'react';

const Editor = props => {
  return (
    <div className="editor-wrapper">
      <h1>Editor</h1>
      <hr />
      <textarea
        id="editor"
        onChange={(e) => props.updatePreview(e.target.value)}
        value={props.currentValue}
      ></textarea>
    </div>
  )
}

export default Editor;