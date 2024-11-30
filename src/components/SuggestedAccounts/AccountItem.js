import React from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountPreview from './AccountPreview'

const cx = classNames.bind(styles)
function AccountItem() {
  const renderPreview = props => {
    return (
      <div tabIndex='-1' {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    )
  }

  return (
    <>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        placement='bottom'
        render={renderPreview}
      >
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src='https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/fbf827a7126935d3984b46067857a87e.jpeg?lk3s=a5d48078&nonce=22050&refresh_token=f74fbfeb5eb2a005a6d9c0204a69abd2&x-expires=1732539600&x-signature=6hGgah3RWXuo%2FTJLQ8ZBvKz4WdI%3D&shp=a5d48078&shcp=81f88b70'
            alt=''
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>cnnuyn</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Nguyên</p>
          </div>
        </div>
      </Tippy>
    </>
  )
}
AccountItem.propTypes = {}
export default AccountItem
