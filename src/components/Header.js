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

export default function Header() {
  const renderLeft = () => {
    return (
      <div style={styles.left}>
        <h1>TimeLine</h1>
        <div>Nav/Options</div>
      </div>
    )
  }

  const renderRight = () => {
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

  return (
    <div style={styles.container}>
      {renderLeft()}
      {renderRight()}
    </div>
  )
}
