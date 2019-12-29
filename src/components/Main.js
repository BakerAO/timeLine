import React from 'react'
import Top from './line/Top'
import Line from './line/Line'
import Bottom from './line/Bottom'

export default class Main extends React.Component {
  render() {
    return (
      <>
        <div className='col'>
          <div className='row' style={{ marginBottom: '30px', marginTop: '20px' }}>
            <div className='col'>
              <Top title='Creation' />
              <Line />
              <Bottom begin='X BC' end='2000 BC' />
            </div>
          </div>
          <div className='row' style={{ marginBottom: '30px' }}>
            <div className='col'>
              <Top title='Patriarchs' />
              <Line />
              <Bottom begin='2000 BC' end='1800 BC'/>
            </div>
          </div>
          <div className='row' style={{ marginBottom: '30px' }}>
            <div className='col'>
              <Top title='Exodus' />
              <Line />
              <Bottom begin='1800 BC' end='1450 BC'/>
            </div>
          </div>
          <div className='row' style={{ marginBottom: '30px' }}>
            <div className='col'>
              <Top title='Conquest' />
              <Line />
              <Bottom begin='1400 BC' end='1350 BC'/>
            </div>
          </div>
          <div className='row' style={{ marginBottom: '30px' }}>
            <div className='col'>
              <Top title='Judges' />
              <Line />
              <Bottom begin='1350 BC' end='1050 BC'/>
            </div>
          </div>
          <div className='row' style={{ marginBottom: '30px' }}>
            <div className='col'>
              <Top title='United Kingdom' />
              <Line />
              <Bottom begin='1050 BC' end='950 BC'/>
            </div>
          </div>
          <div className='row' style={{ marginBottom: '30px' }}>
            <div className='col'>
              <Top title='Divided Kingdom' />
              <Line />
              <Bottom begin='950 BC' end='586 BC'/>
            </div>
          </div>
          <div className='row' style={{ marginBottom: '30px' }}>
            <div className='col'>
              <Top title='Exile' />
              <Line />
              <Bottom begin='586 BC' end='535 BC'/>
            </div>
          </div>
          <div className='row' style={{ marginBottom: '30px' }}>
            <div className='col'>
              <Top title='Return' />
              <Line />
              <Bottom begin='535 BC' end='444 BC'/>
            </div>
          </div>
          <div className='row' style={{ marginBottom: '30px' }}>
            <div className='col'>
              <Top title='Silence' />
              <Line />
              <Bottom begin='444 BC' end='50 AD'/>
            </div>
          </div>
        </div>
      </>
    )
  }
}
