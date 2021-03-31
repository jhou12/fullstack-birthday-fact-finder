import React from 'react'

const Blurb = (props) => {
  if (props.event === '') {
    return <div></div>
  } else {
    console.log('props test', props)
    return (
      <div id="blurb">
        <h2>On this day: {props.event} <br/>HAPPY BIRTHDAY!!! 🎉 🎉 🎉</h2>
      </div>
    )
  }
}

export default Blurb;