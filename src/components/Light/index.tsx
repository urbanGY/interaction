import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Light = () => {
  const [text, setText] = useState('')

  const handleInput = (e: any) => {
    const { value } = e.target
    setText(value)
  }

  return (
    <div className={cx('article')}>
      <input className={cx('input')} type="text" value={text} onChange={handleInput} autoFocus />
    </div>
  )
}

export default Light
