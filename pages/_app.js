import "../styles/globals.css"
import { MDXProvider } from "@mdx-js/react"

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={{}}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
