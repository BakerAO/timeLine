import React from 'react'
import Header from './Header'
import Main from './Main'
import '../styles/Main.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className='grid'>
          <div className='row-20'>
            <Header />
          </div>
          <div className='row-80'>
            <Main />
          </div>
        </div>
      </div>
    )
  }
}
