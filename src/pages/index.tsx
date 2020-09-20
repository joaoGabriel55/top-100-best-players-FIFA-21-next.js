import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PlayerList from '../components/PlayerList'
import { Provider } from "react-redux";
import store from "../redux/store";

export default function Home() {

  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Head>
          <title>FIFA 21 - Top 100 Best players</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            FIFA 21 - Top 100 Best players
        </h1>
          <PlayerList />
        </main>
        <footer className={styles.footer}>
          <h5 className={styles.subtitle}>
            Made with ❤️ by <a target="_blank" href="https://github.com/joaoGabriel55">joaoGabriel55</a>
          </h5>
        </footer>
        <h4 className={styles.subtitle}>
          <a target="_blank" href="https://www.ea.com/games/fifa/fifa-21/ratings/ratings-database">
            Click here to see players in official EA Sports site
          </a>
        </h4>
      </div>
    </Provider>
  )
}
