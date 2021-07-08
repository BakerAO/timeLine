import React, { useState } from 'react'
import LineHeader from './LineHeader'
import LineContent from './LineContent'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    minHeight: '700px',
    border: '1px solid red'
  },
  header: {
    display: 'flex',
    flex: 1,
    margin: '5px 0 0 5px'
  },
  content: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid blue'
  }
}

export default function Lines() {
  const [begin, setBegin] = useState(-1000)
  const [end, setEnd] = useState(0)
  const [china, setChina] = useState([])
  const [greece, setGreece] = useState([])
  const [israel, setIsrael] = useState([])
  const [rome, setRome] = useState([])

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <LineHeader
          setBegin={setBegin}
          setEnd={setEnd}
          setChina={setChina}
          setGreece={setGreece}
          setIsrael={setIsrael}
          setRome={setRome}
          china={china}
          greece={greece}
          israel={israel}
          rome={rome}
        />
      </div>
      <div style={{ ...styles.content, minWidth: 4000 }}>
        <LineContent
          begin={begin}
          end={end}
          china={china}
          greece={greece}
          israel={israel}
          rome={rome}
        />
      </div>
    </div>
  )
}
