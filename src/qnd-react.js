import { h } from 'snabbdom'

const createElement = (type, props = {}, ...children) => {
  console.log(type, props, children)

  // class组件
  if (type.prototype && type.prototype.isQndReactComponent) {
    const componentInstance = new type(props)
    componentInstance.__vNode = componentInstance.render()

    // 添加 生命周期 函数
    componentInstance.__vNode.data.hook = {
      create: () => {
        componentInstance.componentDidMount()
      }
    }

    return componentInstance.__vNode;
  }

  // func组件
  if (typeof type === 'function') {
    return type(props)
  }

  // 事件处理
  let dataProps = {}
  let eventProps = {}

  for (const propsKey in props) {
    if (propsKey.startsWith('on')) {
      const eventKey = propsKey.substring(2).toLowerCase()
      eventProps[eventKey] = props[propsKey]
    } else {
      dataProps[propsKey] = props[propsKey]
    }
  }

  // 拉平数组
  if (children.constructor === Array) {
    children = children.flat(Infinity)
  }
  // 创建和返回虚拟DOM节点
  return h(type, { props: dataProps, on: eventProps }, children)
}

class Component {
  constructor() { }

  componentDidMount() { }

  setState(partialState) {
    this.state = {
      ...this.state,
      ...partialState,
    }
    // react 和 react-dom 之间通信就是通过这个 __updater 对象
    QndReact.__updater(this)
  }

  render() { }
}

Component.prototype.isQndReactComponent = true

const QndReact = {
  createElement,
  Component
}

export default QndReact
