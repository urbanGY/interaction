import React from 'react'
import { Route } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './App.module.scss'

import metaDataList from '$utils/metadata'

import Item from '$components/common/Item'
import Panorama from '$components/panorama'
import Light from '$components/Light'

const cx = classNames.bind(styles)

const Menu = () => {
  return (
    <div className={cx('container')}>
      {metaDataList.map((item, idx) => (
        <Item item={item} key={`${item.title}_${idx}`} />
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <Route exact path="/interaction" component={Menu} />
      <Route exact path="/interaction/panorama" component={Panorama} />
      <Route exact path="/interaction/light" component={Light} />
    </>
  )
}

export default App
