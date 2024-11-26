import Header from '~/layouts/HeaderOnly'
import React from 'react'

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='content'>{children}</div>
      </div>
    </div>
  )
}

export default HeaderOnly
