/**
 * This file is only necessary because I can't get dynamic import of mdx files to work
 *
 */
import Index from "./index.mdx"
import Epic1 from "./epics/authentication.mdx"
import Epic2 from "./epics/search.mdx"
import Story1 from "./stories/authentication/a-user-should-be-able-to-register.mdx"
import Story2 from "./stories/search/searching-for-a-product-by-category.mdx"

export const components = {
  index: Index,
  "epics/authentication": Epic1,
  "epics/search": Epic2,
  "stories/authentication/a-user-should-be-able-to-register": Story1,
  "stories/search/searching-for-a-product-by-category": Story2
}

export default components
