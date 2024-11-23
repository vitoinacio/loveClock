import React from 'react'
import styles from './style.modules/Header.module.css'

const Header = () => {
  return (
    <header>
      <h1 className={`title ${styles.title}`}>K & V</h1>
    </header>
  )
}

export default Header