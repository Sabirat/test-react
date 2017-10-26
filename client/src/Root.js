import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

var amazingInlineJsStyle = {
  border: '1px solid purple',
  padding: '10px',
  backgroundColor: '#ffffcc'
}

class Root extends Component {
  constructor() {
    super();
    this.state = { message: '' }
  }

  componentDidMount() {
    var self = this;
    axios.get('/api/example')
    .then(function (response) {
      console.log(response);
      self.setState({message: response.data.message});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="Root">
        <p>
          Message from server:
          <span style={amazingInlineJsStyle}>{this.state.message}</span>
        </p>
        <p>
          Root! <Link to={`/foo`}>a link to foo</Link>
        </p>
      </div>
    );
  }
}

export default Root;
//export default RootContainer;
