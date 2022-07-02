import React, { Component } from 'react';
import Table from './components/Table.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    yearly_prices: []
  }
  }
  
  componentDidMount() {

    fetch('http://localhost:6001/getHistoryPrices')
    .then(res => res.json())
    .then((data)=>{
      this.setState({ yearly_prices: data.data })
      console.log(this.state.yearly_prices)
    })
    .catch(console.log)
    // .then(yearly_prices => this.setState({ 'yearly_prices': yearly_prices }))
  }

  render() {
    return (
      <div className="App">
        <Table yearly_prices={ this.state.yearly_prices}/>
      </div>
    );
  }

}

export default App;