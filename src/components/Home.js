import Head from 'next/head'
import styles from './styles/Home.module.css'
import PageHeader from './PageHeader';
import Card from './Card';
import Tag from './Tag';
import jsonData from '../../db/data.json';
import { useEffect, useState, useContext } from 'react';

import { FilterContext } from '../context/filter';

export default function Home() {
    const { filter } = useContext(FilterContext)
    const [data, setData] = useState(jsonData)

    useEffect(() => {
        const filteredData = jsonData.filter(current => {
            const values = [current.role, current.level, ...current.languages, ...current.tools]
            return filter.items.every(v => values.includes(v))
        })
        setData(filteredData)
    }, [filter.items])

    return (
        <div className={styles.container}>
        <Head>
            <title>Frontmentor | Static Job Listings</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <PageHeader />

        {filter.items.length > 0 && (
            <div className={styles.tagContainer}>
                {filter.items.map(current => <Tag key={current} item={current}>{current}</Tag>)}
            </div>
        )}
        <main className={styles.main}>
            {data.map(current  => <Card key={current.id} item={current} />)}
        </main>
        </div>
    )
}
