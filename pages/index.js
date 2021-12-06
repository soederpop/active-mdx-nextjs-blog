import Head from "next/head"
import ContentIndex from "content/README.md"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Active MDX Demo</title>
      </Head>

      <main>
        <ContentIndex />
      </main>
    </div>
  )
}
