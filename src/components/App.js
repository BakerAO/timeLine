import React from 'react'
import Header from './Header'
import Main from './Main'
import '../styles/Main.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    )
  }
}
