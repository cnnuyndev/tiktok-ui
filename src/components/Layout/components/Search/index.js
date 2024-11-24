import React, { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'

import * as searchServices from '~/apiServices/searchServices'
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames/bind'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import { SearchIcon } from '~/components/Icons'
import styles from './Search.module.scss'
import { useDebounce } from '~/hooks'
const cx = classNames.bind(styles)

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef()
  const debounced = useDebounce(searchValue, 500)

  useEffect(() => {
    if (debounced.trim() === '') {
      setSearchResult([])
      return
    }
    const fetchApi = async () => {
      setLoading(true)
      const result = await searchServices.search(debounced)
      setSearchResult(result)
      setLoading(false)
    }
    fetchApi()
  }, [debounced])

  const handleClear = () => {
    setSearchValue('')
    inputRef.current.focus()
    setSearchResult([])
  }

  const handleHideResult = () => {
    setShowResult(false)
  }

  const handleChange = e => {
    const searchValue = e.target.value
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue)
    }
  }

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={attrs => (
          <div className={cx('search-result')} tabIndex='-1' {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult?.map(result => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            placeholder='Search accounts and videos'
            spellCheck={false}
            onChange={handleChange}
            value={searchValue}
            onFocus={() => setShowResult(true)}
          ></input>
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          )}
          <span className={cx('spanSpliter')}></span>
          <button
            className={cx('search-btn')}
            onMouseDown={e => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
