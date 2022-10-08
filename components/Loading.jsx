import React from 'react'
import styles from '../styles/Loading.module.css'
const Loading = () => {
  return (
    <section className={styles.spinner_section}>
        <div className={styles.sk_circle}>
            <div className={`${styles.sk_circle1} ${styles.sk_child}`}></div>
            <div className={`${styles.sk_circle2} ${styles.sk_child}`}></div>
            <div className={`${styles.sk_circle3} ${styles.sk_child}`}></div>
            <div className={`${styles.sk_circle4} ${styles.sk_child}`}></div>
            <div className={`${styles.sk_circle5} ${styles.sk_child}`}></div>
            <div className={`${styles.sk_circle6} ${styles.sk_child}`}></div>
            <div className={`${styles.sk_circle7} ${styles.sk_child}`}></div>
            <div className={`${styles.sk_circle8} ${styles.sk_child}`}></div>
            <div className={`${styles.sk_circle9} ${styles.sk_child}`}></div>
            <div className={`${styles.sk_circle10} ${styles.sk_child}`}></div>
            <div className={`${styles.sk_circle11} ${styles.sk_child}`}></div>
            <div className={`${styles.sk_circle12} ${styles.sk_child}`}></div>
        </div>
    </section>
  )
}

export default Loading