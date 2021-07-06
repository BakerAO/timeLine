import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  buttons: {
    display: 'flex'
  },
  button: {
    border: '1px solid black'
  }
}

export default function LineHeader(props) {
  const { israel, setIsrael } = props

  function updateIsrael() {
    if (israel.length > 0) {
      setIsrael([])
    } else {
      setIsrael([
        {
          year: -960,
          description: 'Solomon builds the first Temple'
        },
        {
          year: -722,
          description: 'Assyrians destroy the northern kingdom'
        },
        {
          year: -587,
          description: 'Babylonians destory the first Temple'
        },
        {
          year: -535,
          description: 'Zerubbabel builds the second Temple'
        },
      ])
    }
  }

  function renderButtons() {
    return (
      <>
        <div style={styles.button} onClick={updateIsrael}>
          Old Testament
        </div>
      </>
    )
  }

  return (
    <div style={styles.container}>
      Line Header
      <div style={styles.buttons}>
        {renderButtons()}
      </div>
    </div>
  )
}
