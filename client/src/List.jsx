import React from 'react';
import ListItem from './ListItem.jsx';
import styled from 'styled-components';
import Styled, { SearchedHeader } from './Styles.js';

const List = (props) => (
  <div>
    <SearchedHeader> Last 5 Searches: </SearchedHeader>
    {props.list.map((date, index) =>
      <ListItem
      key={index}
      date={date}
      handleDelete={props.handleDelete}
      />
    )}
  </div>
)

export default List;