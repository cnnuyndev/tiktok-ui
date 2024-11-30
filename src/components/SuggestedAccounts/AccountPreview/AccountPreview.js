import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './AccountPreview.module.scss'
import Button from '~/components/Buttons'

const cx = classNames.bind(styles)
function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src='https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/fbf827a7126935d3984b46067857a87e.jpeg?lk3s=a5d48078&nonce=22050&refresh_token=f74fbfeb5eb2a005a6d9c0204a69abd2&x-expires=1732539600&x-signature=6hGgah3RWXuo%2FTJLQ8ZBvKz4WdI%3D&shp=a5d48078&shcp=81f88b70'
          alt=''
        ></img>
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>cnnuyn</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Nguyên</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>5M </strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>5M </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  )
}

export default AccountPreview
