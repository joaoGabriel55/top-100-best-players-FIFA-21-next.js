import { useFetch } from '../hooks/useFetch'
import Link from 'next/link'
import { Player } from '../interfaces/Player'
import styles from '../styles/PlayerList.module.css'

export default function PlayerList() {
  const listPlayersAPI = (limit: Number, offset: Number) => {
    return `https://ratings-api.ea.com/v2/entities/fifa-21?filter=&sort=ranking:ASC&limit=${limit}&offset=${offset}`
  }

  const getNationFlag = (id: Number) => {
    return `https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/f20assets/country-flags/${id}.png`
  }

  const profilePlayerPic = (id: Number) => {
    return `https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/f20assets/player-headshots/${id}.png`
  }

  const { data } = useFetch<Player[]>(listPlayersAPI(20, 0))

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <section>
      <div className={styles.datatable}>
        {data.map(player => (
          <div className={styles.tile}>
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
        )
        )}
      </div>
    </section>
  )
}
