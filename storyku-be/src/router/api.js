import express from 'express'
import storyController from '../controller/story-controller.js'
import { upload } from '../utils/upload.js'

const apiRouter = express.Router()
apiRouter.get("/", (req, res) => {
  res.send("Hello from express js")
})

apiRouter.get("/api/stories", storyController.list)
apiRouter.get("/api/stories/:id", storyController.get)
apiRouter.post("/api/stories", upload('cover').single('cover'), storyController.store)
apiRouter.put("/api/stories/:id", storyController.update)
apiRouter.delete("/api/stories/:id", storyController.remove)

export { apiRouter }