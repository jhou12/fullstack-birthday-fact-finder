import React from 'react'

const Blurb = (props) => {
  if (props.birthday === '') {
    return <div></div>
  } else {
    return (
      <div id="blurb">
        <h2>On this day: {props.birthday} <br/>HAPPY BIRTHDAY!!! 🎉 🎉 🎉</h2>
      </div>
    )
  }
}

export default Blurb;