import React from 'react';
// import Customer from './components/Customer';
import Income from './components/Income';
import './App.css';

const income = {
  'id': 1,
  'category': '십일조',
  'name': '홍길동',
  'value': '150000',
}

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Income
        id={income.id}
        category={income.category}
        name={income.name}
        value={income.value}
        />
      </div>
    )
  }  
}

export default App;
