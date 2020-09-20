import React from 'react'
import styles from '../styles/Loading.module.css'

export default function Loading(props: any) {
    return (
        <div className={styles.loading} style={{ color: props.color }}>
            <h1>Loading...</h1>
        </div>
    )
}
