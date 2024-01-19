import storyService from "../service/story-service.js"

const list = async (req, res, next) => {
  try {
    const result = await storyService.list()
    res.json({
      message: "List Story",
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const get = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await storyService.getById(id)
    res.json({
      message: "Detail Story",
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const store = async (req, res, next) => {
  try {
    const request = req.body
    request.cover = req.file.filename
    const result = await storyService.store(request)
    res.json({
      message: "Store Story",
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const request = req.body
    const { id } = req.params

    const result = await storyService.update(request, id)
    res.json({
      message: "Update Story",
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await storyService.remove(id)
    res.json({
      message: `Story ${result.title} Removed`,
    })
  } catch (error) {
    next(error)
  }
}

export default { list, store, update, remove, get }