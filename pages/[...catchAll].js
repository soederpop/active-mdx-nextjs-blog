import content from "content"
import dynamic from "next/dynamic"
import DocumentProvider from "components/DocumentProvider"
import AstQuery from "active-mdx/src/AstQuery"
import Editor from "components/Editor"

export default function CatchAllPage({
  documentId,
  doc,
  model,
  extension = "mdx"
} = {}) {
  const Component = dynamic(() =>
    import(`../content/${documentId}.${extension}`)
  )

  global.astQuery = new AstQuery(doc.ast)

  console.log("Doc", doc)

  return (
    <DocumentProvider
      doc={doc}
      model={model}
      extension={extension}
      documentId={documentId}
    >
      <div style={{ height: "100%", width: "100%" }}>
        <div style={{ width: "50%", float: "left" }}>
          <Component />
        </div>
        <div style={{ width: "50%", float: "left" }}>
          <Editor value={doc.content} language="markdown" />
        </div>
      </div>
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
