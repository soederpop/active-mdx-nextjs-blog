// This file is only necessary because I have problems dynamically importing MDX files
import Readme1 from "./README.md"
import Api1 from "./api/AstQuery.mdx"
import Api2 from "./api/Collection.mdx"
import Api3 from "./api/Document.mdx"
import Api4 from "./api/Model.mdx"
import Api5 from "./api/NodeShortcuts.mdx"
import Guides1 from "./guides/README.md"
import Guides2 from "./guides/models/README.md"
import Guides3 from "./guides/models/introduction.mdx"
import Guides4 from "./guides/models/querying.mdx"
import Guides5 from "./guides/models/relationships.mdx"
import Guides6 from "./guides/usage/with-nextjs.mdx"
const mdx = {
  "README": Readme1,
  "api/AstQuery": Api1,
  "api/Collection": Api2,
  "api/Document": Api3,
  "api/Model": Api4,
  "api/NodeShortcuts": Api5,
  "guides/README": Guides1,
  "guides/models/README": Guides2,
  "guides/models/introduction": Guides3,
  "guides/models/querying": Guides4,
  "guides/models/relationships": Guides5,
  "guides/usage/with-nextjs": Guides6,
}
export default mdx
