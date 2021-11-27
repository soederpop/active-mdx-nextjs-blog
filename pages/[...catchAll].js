import { useDocumentComponent } from "components/hooks"
import content from "content"
import components from "content/mdx"

export default function CatchAllPage({ documentId, doc, model } = {}) {
  const Component = components[documentId] || (() => <div>{documentId}</div>)

  console.log({ doc, model })

  return <Component />
}

export async function getStaticPaths() {
  await content.load()

  const paths = content.available
    .filter((id) => id !== "index")
    .map((catchAll) => ({
      params: { catchAll: catchAll.split("/") }
    }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context = {}) {
  const { params = {} } = context
  await content.load()

  const documentId = params.catchAll.join("/")
  const doc = content.document(documentId)
  const model = doc.toModel()

  return {
    props: {
      documentId,
      model: model.toJSON(),
      doc: JSON.parse(JSON.stringify(doc.toJSON()))
    }
  }
}
