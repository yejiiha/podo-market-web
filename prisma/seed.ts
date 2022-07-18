import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  [...Array.from(Array(200).keys())].forEach(async (item) => {
    await client.stream.create({
      data: {
        name: String(item),
        desc: String(item),
        price: item,
        user: {
          connect: {
            id: 1,
          },
        },
      },
    });
    console.log(`${item}/200`);
  });
}

main()
  .catch((e) => console.log(e))
  .finally(() => client.$disconnect());
