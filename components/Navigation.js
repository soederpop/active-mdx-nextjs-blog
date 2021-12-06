import React from "react"
import TableOfContents from "content/table-of-contents.mdx"
import MdxWrapper from "./MdxWrapper"
import DocLink from "./DocLink"
import Link from "next/link"

export default function Navigation(props = {}) {
  const customComponents = {
    a: (props) => {
      return <DocLink {...props} absolute />
    },
    h1: () => {
      return (
        <div>
          <Link href="/" passHref>
            <h3>ActiveMDX Docs</h3>
          </Link>
        </div>
      )
    }
  }

  return (
    <MdxWrapper components={customComponents}>
      <TableOfContents />
    </MdxWrapper>
  )
}
