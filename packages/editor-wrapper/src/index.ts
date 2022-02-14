import React from 'react';
import ReactDOM from 'react-dom';
import Editor from "@editor-spike/editor";

class EditorWrapper {
  constructor(containerId: string, initialText: string, onSave: (text: string) => void) {
    ReactDOM.render(
      React.createElement(Editor, { initialText, onSave }),
      document.getElementById(containerId)
    )
  }
}

export default EditorWrapper;
