import React from 'react'
import styles from '../styles/Paginator.module.css'

// { nextEvent, backEvent, actualPage, totalElements }
export default function Paginator({ backEvent, nextEvent, actualPage, setActualPage }) {
    const [totalPages, setTotalPages] = React.useState([])
    const [lastPageClicked, setLastPageClicked] = React.useState(0)

    React.useEffect(() => {
        let pages = []
        const totalPages = 10
        for (let i = 0; i < totalPages; i++) {
            pages.push(i * 10)
        }
        setTotalPages(pages)
    }, [])

    React.useEffect(() => {
        setActualPageColor(actualPage)
    }, [actualPage])

    const setActualPageColor = (page: number) => {
        const btn = document.getElementById(`page-${page}`)
        const btnLastClicked = document.getElementById(`page-${lastPageClicked}`)

        if (btnLastClicked) {
            console.log(actualPage, lastPageClicked)
            changeStyle(btnLastClicked, 'white', 'black')
        }

        if (btn) {
            console.log(actualPage, lastPageClicked)
            changeStyle(btn, '#541c88', 'white')
            setActualPage(page)
            setLastPageClicked(page)
        }
    }

    const changeStyle = (component: any, backgroundColor: string, color: string) => {
        component.style.backgroundColor = backgroundColor
        component.style.color = color
    }

    return (
        <div className={styles.paginator}>
            <button className={styles.changePageBtn} onClick={backEvent}>{'<'}</button>
            {totalPages.map(page => {
                return (
                    <button
                        id={`page-${page}`}
                        onClick={() => setActualPageColor(page)}
                        key={page}
                        className={totalPages.indexOf(page) + 1 === 1 ? styles.pageBtn : `${styles.pageBtn} ${styles['pageBtn:active']}`}>
                        {totalPages.indexOf(page) + 1}
                    </button>
                )
            })}
            <button className={styles.changePageBtn} onClick={nextEvent}>{'>'}</button>
        </div>
    )
}
