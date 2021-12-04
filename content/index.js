import { Collection } from "active-mdx"
import ApiDoc from "./models/ApiDoc.js"
import Guide from "./models/Guide.js"

import path from "path"

const rootPath = path.parse(import.meta.url.replace("file://", "")).dir

export const collection = new Collection({ rootPath })

collection.model("ApiDoc", ApiDoc)
collection.model("Guide", Guide)

export { ApiDoc, Guide }

export default collection
