/* @flow */

import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import Codemirror from 'react-codemirror';
import '../../../../node_modules/codemirror/lib/codemirror.css';

class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (<div className="rdw-storybook-root">
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
      <textarea
        disabled
        className="demo-content no-focus"
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
      <Codemirror
        value={
          'class EditorConvertToHTML extends Component {\n' +
          '  state = {\n' +
          '   editorState: EditorState.createEmpty(),\n' +
          ' }\n' +
          '\n' +
          ' onEditorStateChange: Function = (editorState) => {\n' +
          '   this.setState({\n' +
          '     editorState,\n' +
          '   });\n' +
          ' };\n' +
          '\n' +
          ' render() {\n' +
          '   const { editorState } = this.state;\n' +
          '   return (<div className="rdw-storybook-root">\n' +
          '     <Editor\n' +
          '       editorState={editorState}\n' +
          '       wrapperClassName="demo-wrapper"\n' +
          '       editorClassName="demo-editor"\n' +
          '       onEditorStateChange={this.onEditorStateChange}\n' +
          '     />\n' +
          '     <textarea\n' +
          '       disabled\n' +
          '       className="demo-content no-focus"\n' +
          '       value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}\n' +
          '     />\n' +
          '   </div>);\n' +
          ' }\n' +
          '}'
        }
        options={{
          lineNumbers: true,
          mode: 'jsx',
          readOnly: true,
        }}
      />
    </div>);
  }
}

export default EditorConvertToHTML;
