import Head from 'next/head'
import styles from './styles/Home.module.css'
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import Tag from '../components/Tag';
import jsonData from '../../db/data.json';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(jsonData)
  const [filterValue, setFilterValue] = useState([])

  const toggleFilter = value => {
    const currentValue = filterValue.includes(value) 
      ? filterValue.filter(v => v !== value)
      : [...filterValue, value]
    setFilterValue(currentValue)
  }
  const removeFilter = value => {
    setFilterValue(filterValue.filter(v => v !== value))
  }

  useEffect(() => {
    const filteredData = jsonData.filter(current => {
      const values = [current.role, current.level, ...current.languages, ...current.tools]
      return filterValue.every(v => values.includes(v))
    })
    setData(filteredData)
  }, [filterValue])

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontmentor | Static Job Listings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />
      <div style={{ display: 'flex', padding: 10, flexWrap: 'wrap' }}>
        {filterValue.map(current => <Tag key={current} close={() => removeFilter(current)}>{current}</Tag>)}
      </div>
      <main className={styles.main}>
        {data.map(current  => (
          <Card key={current.id} item={current} toggleFilter={toggleFilter} removeFilter={removeFilter} filterValue={filterValue} />
        ))}
      </main>
    </div>
  )
}
