import Head from 'next/head'
import styles from './styles/Home.module.css'
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import data from '../../db/data.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontmentor | Static Job Listings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />
      <main className={styles.main}>
        {data.map(current => (
          <Card key={current.id} item={current} />
        ))}
      </main>
    </div>
  )
}
