import React from 'react'

const styles = {
  line: {
    display: 'flex',
    height: '15px',
    width: '100%'
  }
}

export default function LineContent(props) {
  const { begin, end, china, greece, israel, rome } = props

  const renderLine = (key, events, color) => {
    const years = []
    let j = 0
    for (let i = begin; i < end + 1; i++) {
      if (events.length > 0
        && j < events.length
        && events[j].year === i
      ) {
        const eventStyle = {
          flex: 1,
          height: '10px',
          backgroundColor: 'black',
          minWidth: '5px'
        }
        years.push(<div
          key={`${key}-${i}`}
          style={eventStyle}
        />)
        j++
      } else {
        const lineStyle = {
          flex: 1,
          height: '10px',
          backgroundColor: color,
          borderTop: '1px solid black'
        }
        years.push(<div
          key={`${key}-${i}`}
          style={lineStyle}
        />)
      }
    }
    return (
      <div style={styles.line}>
        {years}
      </div>
    )
  }

  function renderDefault() {
    const events = []
    for (let i = begin; i < end + 1; i++) {
      if (i % 100 === 0) {
        events.push({ year: i })
      }
    }
    return renderLine('default', events, 'gray')
  }

  function renderChina() {
    if (china.length > 0) {
      return null
    }
    return null
  }

  function renderGreece() {
    if (greece.length > 0) {
      return null
    }
    return null
  }

  function renderIsrael() {
    if (israel.length > 0) {
      return renderLine('israel', israel, 'yellow')
    }
    return null
  }

  function renderRome() {
    if (rome.length > 0) {
      return null
    }
    return null
  }

  return (
    <>
      {renderDefault()}
      {renderChina()}
      {renderGreece()}
      {renderIsrael()}
      {renderRome()}
    </>
  )
}
