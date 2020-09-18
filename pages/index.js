import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PlayerList from './components/PlayerList.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FIFA 21 - Top 100 Best players</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Top 100 Best FIFA 21 Players
        </h1>
        <h4 className={styles.subtitle}>
          <a target="_blank" href="https://www.ea.com/games/fifa/fifa-21/ratings/ratings-database">
            See on Official EA Sports site
          </a>
        </h4>
        <PlayerList />
      </main>
      <footer className={styles.footer}>
        <h5 className={styles.subtitle}>
          Made with ❤️ by <a target="_blank" href="https://github.com/joaoGabriel55">joaoGabriel55</a>
        </h5>
      </footer>
    </div>
  )
}
