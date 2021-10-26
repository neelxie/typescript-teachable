import React from 'react'
type GreetProps = {
  name: string
  messageCount: number
}
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome Greatest {props.name}! Number of {props.messageCount} messages. </h2>
    </div>
  )
}
