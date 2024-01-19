import { prismaClient } from "../app/db.js"
import { ResponseError } from "../error/ResponseError.js"
import { createStoryValidation, updateStoryValidation } from "../validation/story-validation.js"
import { validate } from "../validation/validation.js"

const list = async () => {
  const stories = await prismaClient.story.findMany({
    include: {
      chapters: true
    },
    orderBy: {
      id: "desc"
    }
  })
  return stories
}

const getById = async (id) => {
  id = parseInt(id)

  const story = await prismaClient.story.findFirst({
    where: {
      id: id
    },
    include: {
      chapters: true
    }
  })

  if (!story) throw new ResponseError(404, "Story Doesn't Exist")

  return story
}

const store = async (request) => {
  request = validate(createStoryValidation, request)

  const story = await prismaClient.story.create({
    data: request
  })

  return story
}

const update = async (request, id) => {
  request = validate(updateStoryValidation, request)
  id = parseInt(id)

  const story = await prismaClient.story.findFirst({
    where: {
      id: id
    }
  })

  if (!story) throw new ResponseError(404, "Story Doesn't Exist")

  return prismaClient.story.update({
    where: {
      id: id
    },
    data: request
  })

}

const remove = async (id) => {
  id = parseInt(id)

  const story = await prismaClient.story.findFirst({
    where: {
      id: id
    }
  })

  if (!story) throw new ResponseError(404, "Data No Found")

  return prismaClient.story.delete({
    where: {
      id: id
    }
  })
}

export default {
  list, store, update, remove, getById
}