import React, { useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './index.module.scss'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame

const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame

const Panorama = () => {
  const playBackConst = 500
  const setHeight = useRef()
  const vid = useRef()
  let animationId

  const handleMetaData = () => {
    setHeight.current.style.height = vid.current.duration * playBackConst + window.innerHeight + 'px'
    scrollplay()
  }

  const scrollplay = () => {
    let frameNumber = window.pageYOffset / playBackConst
    if (!vid.current && animationId) {
      cancelAnimationFrame(animationId)
      return
    }
    vid.current.currentTime = frameNumber
    animationId = requestAnimationFrame(scrollplay)
  }

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationId)
    }
  })

  return (
    <>
      <div ref={setHeight} id={cx('set-height')}></div>
      <video ref={vid} id={cx('v0')} tabIndex="0" autobuffer="true" preload="true" onLoadedMetadata={handleMetaData}>
        <source type="video/mp4" src="NewYork.mp4"></source>
      </video>
    </>
  )
}

export default Panorama
