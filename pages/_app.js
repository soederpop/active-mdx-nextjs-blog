import "../styles/globals.css"
import MdxWrapper from "components/MdxWrapper"
import Navigation from "components/Navigation"

function MyApp({ Component, pageProps }) {
  return (
    <MdxWrapper>
      <div className="site-container">
        <div className="nav">
          <Navigation />
        </div>
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </MdxWrapper>
  )
}

export default MyApp
