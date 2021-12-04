import "../styles/globals.css"
import MdxWrapper from "components/MdxWrapper"

function MyApp({ Component, pageProps }) {
  return (
    <div className="site-container">
      <MdxWrapper>
        <Component {...pageProps} />
      </MdxWrapper>
    </div>
  )
}

export default MyApp
