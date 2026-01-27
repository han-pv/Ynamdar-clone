import React from 'react'

function Error({error}:{error:any}) {
  return (
    <div>{error.message}</div>
  )
}

export default Error