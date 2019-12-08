import QndReact from './qnd-react'

class Counter extends QndReact.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      list: ['bjw', 'hello', 'world']
    }
  }

  componentDidMount() {
    console.log("Counter componentDidMount")
  }

  handleAdd() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <p>This is Counter, current count is {this.state.counter}</p>
        <button onClick={this.handleAdd.bind(this)}>点击+1</button>
        <ul>
          {
            this.state.list.map(item => <li>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default Counter
