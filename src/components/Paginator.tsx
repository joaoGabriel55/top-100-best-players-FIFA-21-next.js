import React from 'react'
import styles from '../styles/Paginator.module.css'

export default function Paginator({ backEvent, nextEvent, actualPage, setActualPage }) {
    const [totalPages, setTotalPages] = React.useState([])
    const [lastPageClicked, setLastPageClicked] = React.useState(0)

    React.useEffect(() => {
        let pages = []
        for (let i = 0; i < (100 / 20); i++) {
            pages.push(i * 20)
        }
        setTotalPages(pages)
    }, [])

    React.useEffect(() => {
        setActualPageColor(actualPage)
    }, [actualPage])

    const setActualPageColor = (page: number) => {
        const btn = document.getElementById(`page-${page}`)
        if (btn)
            setActualPage(page)
    }

    return (
        <div className={styles.paginator}>
            <button
                className={actualPage === 0 ? `${styles.changePageBtnDisabled}` : `${styles.changePageBtn}`}
                disabled={actualPage === 0}
                onClick={backEvent}>
                {'<'}
            </button>
            {totalPages.map(page => {
                return (
                    <button
                        id={`page-${page}`}
                        onClick={() => setActualPageColor(page)}
                        key={page}
                        className={page === actualPage ? `${styles.pageBtn} ${styles.active}` : styles.pageBtn}>
                        {totalPages.indexOf(page) + 1}
                    </button>
                )
            })}
            <button
                className={actualPage === 80 ? `${styles.changePageBtnDisabled}` : `${styles.changePageBtn}`}
                disabled={actualPage === 80}
                onClick={nextEvent}>{'>'}
            </button>
        </div>
    )
}
