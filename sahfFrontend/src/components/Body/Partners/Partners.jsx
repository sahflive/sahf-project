import React from 'react'
import styles from './Partners.module.css'
import Partners_img from '../../../assets/Body/partner.jpg'

const Partners = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Partners</h1>
      <div className={styles.images}>
        <img src={Partners_img } alt="NSC" />
      </div>
    </div>
  )
}

export default Partners