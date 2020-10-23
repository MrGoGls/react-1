import React, {Component} from 'react';

const inSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());
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

export default Table;