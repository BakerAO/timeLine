import React from 'react'
import { Button } from 'antd'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    margin: '0 10px 0 0'
  },
  buttons: {
    display: 'flex'
  }
}

export default function LineHeader(props) {
  const {
    china, setChina,
    greece, setGreece,
    israel, setIsrael
  } = props

  function updateIsrael() {
    if (israel.length > 0) {
      setIsrael([])
    } else {
      setIsrael([
        {
          year: -960,
          duration: 1,
          title: 'Solomon builds the first Temple',
          description: ''
        },
        {
          year: -722,
          duration: 1,
          title: 'Assyrians destroy the northern kingdom',
          description: ''
        },
        {
          year: -587,
          duration: 1,
          title: 'Babylonians destory the first Temple',
          description: ''
        },
        {
          year: -535,
          duration: 1,
          title: 'Zerubbabel builds the second Temple',
          description: ''
        },
      ])
    }
  }

  function updateChina() {
    if (china.length > 0) {
      setChina([])
    } else {
      setChina([
        {
          year: -771,
          duration: 1,
          title: 'End of the Western Zhou and beginning of the Eastern Zhou. The Spring and Autumn period begins.',
          description: ''
        },
        {
          year: -551,
          duration: 1,
          title: 'Confucius born',
          description: ''
        },
        {
          year: -544,
          duration: 1,
          title: 'Sun Tzu born',
          description: ''
        },
        {
          year: -221,
          duration: 1,
          title: 'Qin Shi Huangdi becomes the first Emperor of China, starts the Great Wall',
          description: ''
        },
        {
          year: -207,
          duration: 1,
          title: 'The first Han Emperor, Gaozu, establishes the Chinese Civil Service to help run the government',
          description: ''
        },
        {
          year: -104,
          duration: 1,
          title: 'Emperor Wu defines the Taichu calendar',
          description: ''
        },
      ])
    }
  }

  function updateGreece() {
    if (greece.length > 0) {
      setGreece([])
    } else {
      setGreece([
        {
          year: -776,
          duration: 1,
          title: 'First Olympic Games',
          description: ''
        },
        {
          year: -750,
          duration: 1,
          title: 'Homeric poems recorded in writing',
          description: ''
        },
        {
          year: -510,
          duration: 1,
          title: 'Spartans free Athens from tyranny, Introduction of Democracy in Athens',
          description: ''
        },
        {
          year: -480,
          duration: 1,
          title: 'Battle of Thermopylae',
          description: ''
        },
        {
          year: -399,
          duration: 1,
          title: 'Trial and execution of Socrates',
          description: ''
        },
        {
          year: -336,
          duration: 1,
          title: 'Philip II assassinated, Alexander the Great becomes king of Macedonia',
          description: ''
        },
        {
          year: -332,
          duration: 1,
          title: 'Alexander the Great conquers Jerusalem',
          description: ''
        },
      ])
    }
  }

  function renderButtons() {
    return (
      <>
        <Button style={styles.button} onClick={updateChina}>
          China
        </Button>
        <Button style={styles.button} onClick={updateIsrael}>
          Israel
        </Button>
        <Button style={styles.button} onClick={updateGreece}>
          Greece
        </Button>
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
