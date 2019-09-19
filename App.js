import React, { Component } from 'react';
import _ from 'lodash'
import './App.css';
import TableExamplePadded from './components/Table'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(res => res.json())
      .then(data => this.setState({ issues: data }))
  }

  tabRow() {
    return this.state.issues.map(function (object, i) {
      return <TableExamplePadded obj={object} key={i} />;
    })
  }

  // function that sorts a column
  handleSort = (clickedColumn) => () => {
    const { column, issues, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        issues: _.sortBy(issues, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      issues: issues.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, direction } = this.state

    return (
      <div>
        <table className="sortable ui celled padded table">
          <thead>
            <tr>
              <th className="single line" 
              sorted={column === 'number' ? direction : null}
              onClick={this.handleSort('number')}>Issue Number</th>
              <th className="clickable">Title</th>
              <th className="clickable"
              sorted={column === 'createdAt' ? direction : null}
              onClick={this.handleSort('createdAt')}>Created At</th>
              <th className="clickable"
              sorted={column === 'updatedAt' ? direction : null}
              onClick={this.handleSort('updatedAt')}>Updated At</th>
              <th className="clickable">Label</th>
              <th className="clickable"
              sorted={column === 'state' ? direction : null}
              onClick={this.handleSort('state')}>State</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
