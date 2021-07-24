import React from 'react'
import { Route } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './App.module.scss'

import metaDataList from '$utils/metadata'

import Item from '$components/common/Item'
import Panorama from '$components/panorama'

const cx = classNames.bind(styles)

function App() {
  return (
    <>
      <div className={cx('container')}>
        {metaDataList.map((item) => (
          <Item item={item} />
        ))}
      </div>
      <Route exact path="/panorama" component={Panorama} />
    </>
  )
}

export default App