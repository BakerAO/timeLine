import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: '100px',
    backgroundColor: 'black',
    color: 'white'
  },
  left: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  right: {
    display: 'flex',
    flex: 1,
  }
}

export default function Header() {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h1>TimeLine</h1>
        <div>Nav/Options</div>
      </div>
      <div style={styles.right}>
        <div>TimeLine</div>
        <div>Nav/Options</div>
      </div>
    </div>
  )
}
