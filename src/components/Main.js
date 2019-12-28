import React from 'react'
import Top from './Top'
import Line from './Line'
import Bottom from './Bottom'

export default class Main extends React.Component {
  render() {
    return (
      <div className="grid">
        <Top />
        <Line />
        <Bottom />
      </div>
    )
  }
}
