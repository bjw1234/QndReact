import * as snabbdom from 'snabbdom'
import QndReact from './qnd-react'
import propsModule from 'snabbdom/modules/props'
import eventModule from 'snabbdom/modules/eventlisteners'

const reconcile = snabbdom.init([propsModule, eventModule])

let rootVNode = null
const render = (el, rootDomElement) => {
  if (rootVNode === null) {
    rootVNode = rootDomElement
  }
  // 就是一个patch函数，path(oldDom, newDom)
  rootVNode = reconcile(rootVNode, el)
}

// state 更新被调用
QndReact.__updater = (instance) => {
  const oldVNode = instance.__vNode
  const newVNode = instance.render()
  instance.__vNode = reconcile(oldVNode, newVNode)
}

const QndReactDom = {
  render
}

export default QndReactDom

