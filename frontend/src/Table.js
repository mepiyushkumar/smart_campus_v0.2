import React from "react";
import axios from 'axios';


class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counts: []
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/get_counts')
        .then(res => {
          this.setState({ counts: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  
    render() {
        const counts = this.state.counts;
        const tableRows = [];
      
        for (let i = 0; i < counts.length; i++) {
          const count = counts[i];
          const row = (
            <tr key={count._id}>
              <td>{count._id}</td>
              <td>{count.count}</td>
            </tr>
          );
          tableRows.push(row);
        }
      
        return (
          <div>
            <h1>Data Counts:</h1>
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </table>
          </div>
        );
      }
      
  }
  
  export default Table;