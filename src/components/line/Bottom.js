import React from 'react'

export default class Bottom extends React.Component {
  render() {
    return (
      <div className='row-45'>
        <div className='col-50'>
          {this.props.begin}
        </div>
        <div className='col-50 end'>
          {this.props.end}
        </div>
      </div>
    )
  }
}
