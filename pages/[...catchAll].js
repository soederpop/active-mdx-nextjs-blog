import content from "content"
import dynamic from "next/dynamic"
import DocumentProvider from "components/DocumentProvider"

export default function CatchAllPage({
  documentId,
  doc,
  model,
  extension = "mdx"
} = {}) {
  const Component = dynamic(() =>
    import(`../content/${documentId}.${extension}`)
  )

  return (
    <DocumentProvider
      doc={doc}
      model={model}
      extension={extension}
      documentId={documentId}
    >
      <Component />
    </DocumentProvider>
  )
}

export async function getStaticPaths() {
  await content.load()

  const paths = content.available.map((catchAll) => ({
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

  let model

  try {
    model = doc.toModel()
  } catch (error) {}

  const documentId = params.catchAll.join("/")
  const doc = content.document(documentId)
  const extension = content.items.get(documentId).path.split(".").pop()

  return {
    props: {
      documentId,
      extension,
      model: (model && model.toJSON()) || {},
      doc: JSON.parse(JSON.stringify(doc.toJSON()))
    }
  }
}
