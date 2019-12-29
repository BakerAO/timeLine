import React from 'react'

export default class Top extends React.Component {
  render() {
    return (
      <div className='row-45'>
        <div className='col center'>
          <h3 style={{ margin: 0 }}>{this.props.title}</h3>
        </div>
      </div>
    )
  }
}
