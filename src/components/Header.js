import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <h1>Timeline</h1>
        </div>
        <div>
          <img src="/settings.png" alt="settings" />
        </div>
      </div>
    )
  }
}
