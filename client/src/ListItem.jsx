import React from 'react';

const ListItem = (props) => (
  <div id="item">
    <h3>{props.item.date}: {props.item.event}</h3><p></p>
  </div>
)

export default ListItem;