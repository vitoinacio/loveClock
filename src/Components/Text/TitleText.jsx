import React from 'react'
import styles from './style.modules/TitleText.module.css'

const TitleText = ({title}) => {
  return (
    <h1 className={`${styles.title} title`}>
      {title}
    </h1>
  )
}

export default TitleText