import React, { Component } from 'react';
import './App.css';
import Table from './components/Table/Table';
import ThemeButton from './components/ThemeButton/ThemeButton'
import matchSorter from 'match-sorter';

class App extends Component {

  render() {

    let data = require('./data/data.json');
    let columns = [
      {
        Header: "Name",
        accessor: "name",
        id: "name",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["name"] }),
        filterAll: true
      },
      {
        Header: "Balance",
        accessor: "balance",
        id: "balance",
        filterable: false
      },
      {
        Header: "Age",
        accessor: "age",
        id: "age",
        filterable: false
      },
      {
        Header: "Gender",
        accessor: "gender",
        id: "gender"
      },
      {
        Header: "Company",
        accessor: "company",
        id: "company",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["company"] }),
        filterAll: true
      },
      {
        Header: "Email",
        accessor: "email",
        id: "email",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["email"] }),
        filterAll: true
      },
      {
        Header: "Phone",
        accessor: "phone",
        id: "phone"
      },
      {
        Header: "Registered",
        accessor: "registered",
        id: "registered"
      }
    ];
    return (
      <div>
        <ThemeButton/>
        <Table data={data} columns={columns}/>
      </div>


    );
  }
}

export default App;
