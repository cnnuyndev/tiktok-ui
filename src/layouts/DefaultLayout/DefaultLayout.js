import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import Header from '~/layouts/components/Header'
import Sidebar from '~/layouts/DefaultLayout/Sidebar'
import style from './DefaultLayout.module.scss'
import React from 'react'

const cx = classNames.bind(style)

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  )
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default DefaultLayout
