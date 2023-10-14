import React from 'react'

export default function Welcome(props) {
  return (
    <div>
          <h1>Welcome to {props.title} page</h1>
          <h2>Now: { new Date().toLocaleDateString()}.</h2>
    </div>
  )
}
