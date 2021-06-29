import React from 'react'
import LeftSide from './leftSide'
import RightSide from './rightSide'

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: '120px',
    backgroundColor: 'black',
    color: 'white'
  }
}

export default function Header() {
  return (
    <div style={styles.container}>
      <LeftSide />
      <RightSide />
    </div>
  )
}
