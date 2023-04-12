import React from "react";
import axios from 'axios';


class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counts: [],
        rec :0,
        non_rec :0
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/get_counts')
        .then(res => {
          this.setState({ counts: res.data });
          console.log(this.state.counts)
        })
        .catch(err => {
          console.log(err);
        });
    }

    // updateCounts(rec, non_rec) {
      // }
      render() {
        const counts = this.state.counts;
        const tableRows = [];
        let rec = 0;
        let non_rec= 0;
        
      for (let i = 0; i < counts.length; i++) {
        const count = counts[i];
        if(count._id==="Bread" || count._id==="Cardboard"){
          rec= rec+count.count;
        } else if(count._id==="Metal Can" || count._id==="Plastic Bag"){
          non_rec = non_rec+count.count ;
        }
        const row = (
          <tr key={count._id}>
            <td style={{ border: "1px solid orange", padding: "10px", textAlign: "center" }}>{count._id}</td>
            <td style={{ border: "1px solid orange", padding: "10px", textAlign: "center" }}>{count.count}</td>
            </tr>
            );
            tableRows.push(row);
            this.setState({ rec,non_rec });
          }
          //this.updateCounts(rec, non_rec);
          
          return (
            <div>
            <div className="container-fuild bg-secondary" style={{height:"100vh" }}>
            <div className="col-sm-12">
            <div className="row  d-flex justify-content-center text-center p-5">
            <h1>Logs</h1>
                <table style={{ width: '60%', borderCollapse: "collapse"}}>
                  <thead>
                    <tr>
                      <th style={{ border: "1px solid orange", padding: "10px", textAlign: "center" }} >Data</th>
                      <th style={{ border: "1px solid orange", padding: "10px", textAlign: "center" }}>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows}
                  </tbody>
                </table>
                <div className="row p-5">
                    <p className="h1">Recyclable Items : {this.state.rec}</p>
                    <p className="h1">Non-Recyclable Items : {this.state.non_rec}</p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      );
    }
    
  
}
  
  export default Table;