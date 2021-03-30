import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h3> Last 5 Searches: </h3>
    {props.items.map((item, index) => <ListItem key={index} item={item}/>)}
  </div>
)

export default List;