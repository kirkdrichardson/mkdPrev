import React, { Component } from 'react';
import './App.css';
const marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true,
  sanitize: true,
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: preview,
      mkd: marked(preview)
    }
  }

  parseHTML = (str) => {
    return {__html: str};
  }

  handleChange = (event) => {
    const input = event.target.value;
    const mkdHtml = marked(input);
    this.setState({
      input: input,
      mkd: mkdHtml
    });
  }

  render() {
    return (
      <div className="App">

              <textarea
                className="textInput"
                placeholder = {"Enter markdown here"}
                wrap="soft"
                value={ this.state.input }
                onChange={this.handleChange}
                />

              <div
                className="textOutput"
                dangerouslySetInnerHTML={this.parseHTML(this.state.mkd)} />
      </div>
    );
  }
}

const preview = "Heading \n======= \n \nSub-heading\n-----------\n\n### Another deeper heading\n\n*italic*, **bold**, \n\n `monospace`, ~~strikethrough~~ .\n\nShopping list:\n* pencils\n* paper\n* ruler \n\n ## Drag bottom right corner to resize.";

export default App;
