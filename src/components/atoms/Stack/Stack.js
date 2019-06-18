import React from 'react'
import './Stack.scss'

const Stack = ({ stacks }) => {
  const stackList = stacks.map((item, i) => <div className={item} />)
  return <div className="stack__container">{stackList}</div>
}

export default Stack
