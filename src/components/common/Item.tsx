import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './item.module.scss'
import { ItemModel } from '$constant/type'
const cx = classNames.bind(styles)

interface ItemProps {
  item: ItemModel
}

function Item({ item }: ItemProps) {
  const { link, title, subTitle } = item
  return (
    <div className={cx('item')}>
      <Link to={link}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('sub-title')}>{subTitle}</div>
      </Link>
    </div>
  )
}

export default Item
