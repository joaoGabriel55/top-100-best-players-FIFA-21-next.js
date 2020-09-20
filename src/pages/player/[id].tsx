import React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useFetch } from '../../hooks/useFetch'
import { Player } from '../../interfaces/Player'
import styles from '../../styles/Home.module.css'
import Loading from '../../components/Loading'


export default function PlayerInfo() {
    const router = useRouter()
    const { id } = router.query

    const playerCard = (id: string | string[]) => {
        return `https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/f20assets/player-shields/${id}.png`
    }

    const { data } = useFetch<Player>(`https://ratings-api.ea.com/v2/entities/fifa-21?filter=primaryKey:${id}`)

    return (
        <div className={styles.container}>
            {
                data ?
                    <>
                        <Head><title>{data[0].fullNameForSearch}</title></Head>
                        <main className={styles.main}>
                            <h1 className={styles.title}>
                                {data[0].fullNameForSearch}
                            </h1>
                            <img src={playerCard(id)} width="380" />
                        </main>
                    </> :
                    <>
                        <Head><title>Loading...</title></Head>
                        <Loading />
                    </>
            }
        </div>
    )
}
