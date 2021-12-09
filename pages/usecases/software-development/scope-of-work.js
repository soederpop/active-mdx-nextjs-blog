import React from "react"
import ScopeOfWorkIntro from "content/usecases/software-development/scope-of-work.mdx"

export default function ScopeOfWorkDemo(props = {}) {
  return (
    <div>
      <pre>{JSON.stringify(props.epics, null, 2)}</pre>
      <ScopeOfWorkIntro />
    </div>
  )
}

export async function getStaticProps() {
  const collection = await import(
    "content/usecases/software-development/docs/index.js"
  ).then((mod) => mod.default.load())

  return {
    props: {
      epics: collection.available
    }
  }
}
