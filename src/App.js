import React, { Component } from 'react';
import './App.css';
const marked = require('marked');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      mkd: ''
    }
  }

  handleChange = (event) => {
    const input = event.target.value;
    const mkdHtml = marked(input);
    // const parser = new DOMParser();
    // const test = parser.parseFromString(testStr, "text/html");
    this.setState({
      input: input,
      mkd: mkdHtml
    })
  }

  render() {
    return (
      <div className="App">

              <textarea
                className="text"
                placeholder = {"Enter markdown here"}
                wrap="soft"
                value={ this.state.input }
                onChange={this.handleChange}
                />

              <textarea
                className="text"
                placeholder = {"Preview will appear here"}
                value = {this.state.mkd}
                disabled
                />


      </div>
    );
  }
}

export default App;
