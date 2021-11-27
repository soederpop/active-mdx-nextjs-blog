import { Model } from "active-mdx"

import Epic from "./Epic.js"

export default class Story extends Model {
  epic() {
    return this.belongsTo(Epic, {
      id: (document) => document.meta.epic
    })
  }
}