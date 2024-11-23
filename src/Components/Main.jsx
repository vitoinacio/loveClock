import React from 'react'
import styles from './style.modules/Main.module.css'
import ImageContainer from './slide/ImageContainer'
import TextContainer from './Text/TextContainer'
import ClockContainer from './Clock/ClockContainer'
import Music from './Music/Music'

const Main = () => {
  return (
    <main className={styles.main}>
      <ImageContainer />
      <TextContainer />
      <ClockContainer />
      <Music />
    </main>
  )
}

export default Main