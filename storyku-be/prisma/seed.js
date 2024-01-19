import { prismaClient } from "../src/app/db.js";

const main = async () => {

  // stories sample
  await prismaClient.story.createMany({
    data: [
      {
        title: "title 1",
        category: "techonology",
        cover: "cover-1.jpg",
        status: "draft",
        synopsis: "synopsis 1",
        tags: "1, first, pertama",
        writer: "jhon doe",        
      },
      {
        title: "title 2",
        category: "techonology",
        cover: "cover-2.jpg",
        status: "draft",
        synopsis: "synopsis 2",
        tags: "2, seconde, kedua",
        writer: "jhon doe",        
      },
      {
        title: "title 3",
        category: "techonology",
        cover: "cover-3.jpg",
        status: "draft",
        synopsis: "synopsis 3",
        tags: "3, third, ketiga",
        writer: "jhon doe",        
      },
    ]
  })
}

main()
  .then(async () => {
    await prismaClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1)
  })