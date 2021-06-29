import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Lines from './lines'

export default function Content() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/lines' component={Lines} />
      </Switch>
    </div>
  )
}
