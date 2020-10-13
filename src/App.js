import React, { Component } from 'react';
import './App.css';

    const list = [
      {
        title: '1JZ-GE' ,
        url: 'https://www.drom.ru/catalog/toyota/engine/1jz-ge/',
        manufacturer: 'Toyota',
        objectID: 0,
      },
      {
        title: '1JZ-GTE',
        url: 'https://www.drom.ru/catalog/toyota/engine/1jz-gte/',
        manufacturer: 'Toyota, Yamaha',
        objectID: 1,
      },
      {
        title: '2JZ-GE' ,
        url: 'https://www.drom.ru/catalog/toyota/engine/2jz-ge/',
        manufacturer: 'Toyota',
        objectID: 2,
      },
      {
        title: '2JZ-GTE' ,
        url: 'https://www.drom.ru/catalog/toyota/engine/2jz-gte/#:~:text=%D0%94%D0%B2%D0%B8%D0%B3%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%202JZ%2DGTE%20%D1%82%D1%83%D1%80%D0%B1%D0%BE,%D0%BD%D0%B0%20Toyota%20Aristo%2C%20Toyota%20Supra.',
        manufacturer: 'Toyota',
        objectID: 3,
      },
      {
        title: 'SR20DET' ,
        url: 'https://www.drom.ru/catalog/nissan/engine/sr20det/',
        manufacturer: 'Nissan',
        objectID: 4,
      },
      {
        title: 'RB25DET NEO' ,
        url: 'https://www.drom.ru/catalog/nissan/engine/rb25det/',
        manufacturer: 'Nissan',
        objectID: 5,
      },
    ];
    const inSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());
    
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: '',
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    }
    onSearchChange(event){  
      this.setState({searchTerm: event.target.value});
    }

    onDismiss(id) {
      const isNotId = item =>
      item.objectID !== id;
      const updateList =
      this.state.list.filter (isNotId);
      this.setState ({ list:updateList});
      }

   render () {
     const {searchTerm, list} = this.state;
    return (
      <div className = "App">
        <Search
          value = {searchTerm}
          onChange = {this.onSearchChange}
         >
           Поиск
        </Search>

        <Table
          list = {list}
          pattern = {searchTerm}
          onDismiss = {this.onDismiss}
         />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const {value, onChange, children} = this.props;
    return (
      <form>
        {children}
        <input
        type = "text"
        value = {value}
        onChange = {onChange}
        />
      </form>
    )
  }
}

class Table extends Component {
  render () {
    const {list, pattern, onDismiss} = this.props;
    return (
      <div>
        {list.filter(inSearched(pattern)).map(item => 
            <div key={item.objectID}>
              <span>
                <a href= {item.url}>{item.title}</a>
              </span>
              <span>{item.manufacturer}</span>
              <span><button onClick = {() => onDismiss(item.objectID)} type="button">Удалить</button></span>
            </div>
        )}
      </div>
    )
  }
}
export default App;
