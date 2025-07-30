import React from 'react'

function Word({progress}) {
  return (
    <div className='text-3xl mt-2'>
      {
        progress.map((letra, i) => (
          <span key={i}>{letra || ' _ ' }</span>
        ))
      }
    </div>
  )
}

export default Word