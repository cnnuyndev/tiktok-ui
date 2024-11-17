import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEarthAsia,
  faEllipsisVertical,
  faSignIn,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames/bind'
import styles from '~/components/Layout/components/Header/Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Buttons'
import Menu from '~/components/Popper/Menu'
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons'
import Image from '~/components/Image'
import Search from '../Search'
const cx = classNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
]

const Header = () => {
  const currentUser = true

  // handle logic
  const handleMenuOnchage = menuItem => {
    switch (menuItem.type) {
      case 'language':
        break
      default:
    }
  }

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ]

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='logo tiktok'></img>
        </div>
        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content='Upload video' placement='bottom'>
                <button className={cx('action-btn')}>
                  {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content='Message' placement='bottom'>
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content='Inbox' placement='bottom'>
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary righticon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuOnchage}
          >
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src='https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/fbf827a7126935d3984b46067857a87e.jpeg?lk3s=a5d48078&nonce=22050&refresh_token=f74fbfeb5eb2a005a6d9c0204a69abd2&x-expires=1732539600&x-signature=6hGgah3RWXuo%2FTJLQ8ZBvKz4WdI%3D&shp=a5d48078&shcp=81f88b70'
                alt='xinhiu'
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header
