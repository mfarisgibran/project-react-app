import React from 'react'

export default function Layout(props) {
  return (
    <div
      style={{
        color: 'blue',
      }}
    >
      {props.children}
    </div>
  )
}
