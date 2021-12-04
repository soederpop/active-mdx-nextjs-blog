import Head from "next/head"
import styles from "../styles/Home.module.css"
import ContentIndex from "content/README.md"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Active MDX Demo</title>
      </Head>

      <main className={styles.main}>
        <ContentIndex />
      </main>
    </div>
  )
}
