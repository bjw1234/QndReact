import QndReact from './qnd-react'
import QndReactDom from './qnd-react-dom'
import Counter from './counter'

const Greeting = ({ name }) => <p>welcome {name}</p>

const App = (
  <div>
    <h1 className="primary">hello world</h1>
    <p>test react jsx</p>
    <Greeting name="Joven.baijiawei" />
    <Counter />
  </div>
)

QndReactDom.render(App, document.getElementById('root'))
