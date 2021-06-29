import React from 'react'

const styles = {
  right: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
  rightSpacer: {
    display: 'flex',
    flex: 4
  },
  rightItem: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    margin: '10px 0 0 0'
  },
  p: {
    margin: '0 0 0 0',
    border: '1px solid white',
    height: '20px',
    padding: '5px'
  }
}

export default function RightSide() {
  return (
    <div style={styles.right}>
      <div style={styles.rightSpacer} />
      <div style={styles.rightItem}>
        <p style={styles.p}>Account</p>
      </div>
      <div style={styles.rightItem}>
        <p style={styles.p}>Settings</p>
      </div>
    </div>
  )
}
