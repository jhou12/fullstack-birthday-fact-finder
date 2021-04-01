import React from 'react';
import styled from 'styled-components';
import Styles, { ListItemStyled, DateStyled, DeleteButton, Space } from './Styles.js'

const ListItem = (props) => (
  <ListItemStyled>
    <DateStyled>🍰 {props.date.date}</DateStyled>
    <div>
      <DeleteButton
      onClick={()=>props.handleDelete(props.date.date)}>
      x
      </DeleteButton>
      <Space></Space>
      <div>{props.date.event}</div>
    </div>
  </ListItemStyled>
)

export default ListItem;