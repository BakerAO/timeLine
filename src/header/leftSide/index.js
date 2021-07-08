import React from 'react'
import Nav from './Nav'

const styles = {
  left: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    margin: '0px 0px 0px 15px'
  },
  h1: {
    color: 'white'
  }
}

export default function LeftSide() {
  return (
    <div style={styles.left}>
      <h1 style={styles.h1}>TimeLine</h1>
      <Nav />
    </div>
  )
}
