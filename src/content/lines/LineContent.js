import React from 'react'
import { Popover } from 'antd'

const styles = {
  line: {
    display: 'flex',
    height: '15px',
    width: '100%'
  }
}

export default function LineContent(props) {
  const {
    begin, end, china, greece, israel, rome
  } = props

  const renderSpace = (key, start, stop, color) => {
    const length = stop - start
    const lineStyle = {
      flex: length,
      height: '15px',
      backgroundColor: color,
      minWidth: `${length}px`
    }
    return (<div
      key={`${key}-${start}-${stop}`}
      style={lineStyle}
    />)
  }

  const renderEvent = (key, event) => {
    const eventStyle = {
      flex: event.duration,
      height: '15px',
      backgroundColor: 'black',
      minWidth: `${event.duration}px`
    }

    const content = (
      <div key={`content-${key}-${event.year}`}>
        {event.title}
      </div>
    )

    return (
      <Popover
        key={`popover-${key}-${event.year}`}
        title={event.year}
        content={content}
      >
        <div
          key={`${key}-${event.year}`}
          style={eventStyle}
        />
      </Popover>
    )
  }

  const renderLine = (key, events, color) => {
    const years = []
    let i = begin
    let j = 0

    while (i <= end && j < events.length) {
      years.push(renderSpace(key, i, events[j].year, color))
      years.push(renderEvent(key, events[j]))
      i = events[j].year + events[j].duration
      j++
    }

    if (i !== end) {
      years.push(renderSpace(key, i, end, color))
    }

    return (
      <div key={key} style={styles.line}>
        {years}
      </div>
    )
  }

  function renderDefault() {
    const events = []
    for (let i = begin; i < end + 1; i++) {
      if (i % 100 === 0) {
        events.push({ year: i, duration: 1, title: '' })
      }
    }
    return renderLine('default', events, '#ededed')
  }

  function renderChina() {
    if (china.length > 0) {
      return renderLine('china', china, 'lightblue')
    }
    return null
  }

  function renderGreece() {
    if (greece.length > 0) {
      return renderLine('greece', greece, 'red')
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
