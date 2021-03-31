import React from 'react';

const ListItem = (props) => (
  <div id="item">
    <h3>{props.date.date}: {props.date.event}</h3><p></p>
  </div>
)

export default ListItem;