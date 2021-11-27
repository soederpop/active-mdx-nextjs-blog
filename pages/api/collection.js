import { collection } from "content"

export default async function handler(req, res) {
  await collection.load()
  res.status(200).json(collection.available)
}
