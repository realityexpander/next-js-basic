import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// from Next.js in 100 seconds // plus full beginner's tutorial
// https://www.youtube.com/watch?v=Sklc_fQBmcs

// github source
// https://github.com/fireship-io/nextjs-basics


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cars Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          See <Link href="/cars">Cars</Link>
        </h1>
        </main>
    </div>
  )
}
