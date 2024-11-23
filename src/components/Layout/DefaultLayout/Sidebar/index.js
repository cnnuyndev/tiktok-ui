import React from 'react'
import style from './Sidebar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style);
function index() {
  return (
    <aside className={cx('wrapper')}>
      <h2>Side bar</h2>
    </aside>
  )
}

export default index