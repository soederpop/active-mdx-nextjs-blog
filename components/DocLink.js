import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function DocLink(props = {}) {
  const { children } = props
  const router = useRouter()

  if (!props.href) {
    return <a {...props} />
  }

  const resolveRelative = (href) => {
    const base = router.asPath.split("/")
    const prefix = base.slice(0, base.length - 1).join("/")
    return href.replace(/\.\//, `/${prefix}/`).replace(/\/\//g, "/")
  }

  const href = String(props.href)

  if (href.startsWith(".")) {
    return (
      <Link href={resolveRelative(href).replace(/\.mdx?$/, "")}>
        <a>{children}</a>
      </Link>
    )
  }

  return <a {...props} />
}
