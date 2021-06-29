import { Link } from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    height: '100%'
  },
  item: {
    margin: '0px 0px 10px 15px'
  }
}

export default function Nav() {
  return (
    <div style={styles.container}>
      <div style={styles.item}><Link to='/'>Home</Link></div>
      <div style={styles.item}><Link to='/lines'>Lines</Link></div>
    </div>
  )
}
