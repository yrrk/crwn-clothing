import React, { Component } from 'react';
import TableContent from './components/material-table/material-table.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipments: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/shipments')
      .then((response) => response.json())
      .then((shipments) => this.setState({ shipments: shipments }));
  }
  render() {
    return (
      <div className="App">
        <TableContent shipments={this.state.shipments} />
      </div>
    );
  }
}

export default App;
