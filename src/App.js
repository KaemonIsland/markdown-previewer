import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getMarkDown } from './store';

import Editor from './components/Editor';
import Previewer from './components/Previewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor
          updatePreview={this.props.previewMarkDown}
          currentValue={this.props.markDown}/>
        <Previewer toPreview={this.props.markDown} />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    markDown: state.markDown
  }
}

let mapDispatchToProps = dispatch => {
  return {
    previewMarkDown: (text) => {
      dispatch(getMarkDown(text));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(App);
