import React from 'react';
import axios from 'axios';

class App extends React.Component {
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
      <div>
        <h1>Received Data:</h1>
        <h2>{this.state.data}</h2>
      </div>
    );
  }
}

export default App;
