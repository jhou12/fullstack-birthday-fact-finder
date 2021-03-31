import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h2> Last 5 Searches: </h2>
    {props.list.map((date, index) => <ListItem key={index} date={date}/>)}
  </div>
)

export default List;