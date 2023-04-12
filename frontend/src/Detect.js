import React from 'react';
import axios from 'axios';

class Detect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
    this.ws = new WebSocket('wss://gtg3p8yh66.execute-api.us-east-1.amazonaws.com/production/');
  }

  componentDidMount() {
    this.ws.onopen = () => {
      console.log('Connected to WebSocket');
    };

    this.ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      console.log("data ", newData)
      this.setState({ data: newData });
      const obj ={
        data : newData
      }
      console.log("xxxxxxx "+obj);
      axios.post('http://localhost:5000/put_in_db', obj)
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
    };
  }

  render() {
    return (
      <div className='container-fulid bg-secondary' style={{height:"100vh" }}>
      <div className="row d-flex align-items-center " style={{ height: "100%" }}>
        <div className='row d-flex justify-content-center text-center '>
                <h1>Detected trash </h1>

                <h1 style={{color:"white"}}>.{this.state.data}</h1>
        </div>
        </div>
      </div>
    );
  }
}

export default Detect;
