import React from 'react'
import style from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import {
  HomeIcon,
  HomeActiveIcon,
  LiveIcon,
  LiveActiveIcon,
  UseGroupIcon,
  UseGroupActiveIcon,
} from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccounts'
const cx = classNames.bind(style)
function index() {
  return (
    <nav className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title='For You'
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title='Following'
          to={config.routes.following}
          icon={<UseGroupIcon />}
          activeIcon={<UseGroupActiveIcon />}
        />
        <MenuItem
          title='Live'
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
      <SuggestedAccounts label='Following' />
      <SuggestedAccounts label='Suggested Accounts' />
    </nav>
  )
}

export default index
