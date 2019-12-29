import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className='col-10' />
        <div className='col-80 borderBottom'>
          <h1>Timeline</h1>
        </div>
        <div className='col-10'>
          <img height='50px' src="/settings.png" alt="settings" />
        </div>
      </>
    )
  }
}
