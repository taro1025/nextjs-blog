import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* {' '}がないとReadとthisの間に空白が入らない*/}
      Read{' '}
      <Link href="/posts/first-post">
        <a>this page!</a>
      </Link>
      <section className={utilStyles.headingMd}>
        <p>どうも、りんたろうです。よろしくお願いします。</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}