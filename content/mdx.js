// This file is only necessary because I have problems dynamically importing MDX files
import Epics1 from "./epics/authentication.mdx"
import Epics2 from "./epics/search.mdx"
import Index1 from "./index.mdx"
import Stories1 from "./stories/authentication/a-user-should-be-able-to-register.mdx"
import Stories2 from "./stories/search/searching-for-a-product-by-category.mdx"
const mdx = {
  "epics/authentication": Epics1,
  "epics/search": Epics2,
  "index": Index1,
  "stories/authentication/a-user-should-be-able-to-register": Stories1,
  "stories/search/searching-for-a-product-by-category": Stories2,
}
export default mdx
