import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import Link from 'next/link'
import { Player } from '../interfaces/Player'
import styles from '../styles/PlayerList.module.css'
import Paginator from './Paginator'

export default function PlayerList() {
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)

  const listPlayersAPI = (limit: Number, offset: Number) => {
    return `https://ratings-api.ea.com/v2/entities/fifa-21?filter=&sort=ranking:ASC&limit=${limit}&offset=${offset}`
  }

  const getNationFlag = (id: Number) => {
    return `https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/f20assets/country-flags/${id}.png`
  }

  const profilePlayerPic = (id: Number) => {
    return `https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/f20assets/player-headshots/${id}.png`
  }

  const { data } = useFetch<Player[]>(listPlayersAPI(limit, offset))

  const backPage = (e: any) => {
    e.preventDefault()
    let page = offset

    if (page === 0)
      return

    setOffset(page - 10)
    window.scrollTo(0, 0)
  }

  const nextPage = (e: any) => {
    e.preventDefault()
    let page = offset

    if (page > 80)
      return

    setOffset(page + 10)
    window.scrollTo(0, 0)
  }

  const setActualPage = (val: number) => {
    setOffset(val)
    window.scrollTo(0, 0)
  }
  return (
    <section className={styles.datatable}>
      <div>
        {data ?
          data.map(player => (
            <div className={styles.tile} key={player.primaryKey}>
              <div className={styles.shieldBackground}>
                <Link href="/player/[id]" as={`/player/${player.primaryKey}`}>
                  <img src={profilePlayerPic(player.primaryKey)} alt={`${player.fullNameForSearch}`} width="241" height="241" />
                </Link>
              </div>
              <div className={styles.playerOverall}>
                <h2>{player.fullNameForSearch}</h2>
                <h1>{player.overall_rating}</h1>
                <img src={getNationFlag(player.nationality)} />
              </div>
            </div>
          )) :
          <p>Loading</p>
        }
      </div>
      <Paginator
        actualPage={offset}
        setActualPage={setActualPage}
        backEvent={(e: any) => backPage(e)}
        nextEvent={(e: any) => nextPage(e)}
      />
    </section>
  )
}
