import React, { Component } from 'react'
import ReactTable from 'react-table';
import windowSize from 'react-window-size';
import "react-table/react-table.css";


class Table extends Component {
  render() {
    let data = this.props.data;
    let columns = this.props.columns;
    let windowHeight = this.props.windowHeight - 25 + "px";
    return (
      <div>
        <ReactTable
          data = {data}
          columns = {columns}
          className="-striped -highlight"
          style={{
            height: windowHeight // This will force the table body to overflow and scroll, since there is not enough room
          }}
          defaultPageSize={100}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
        />
      </div>
    )
  }
}


export default windowSize(Table)
