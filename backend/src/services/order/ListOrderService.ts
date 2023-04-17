import prismaClient from "../../prisma";
class ListOrderService {
  async execute() {
    const orders = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        create_at: "desc",
      }, 
      select: {
        id: true,
        table: true,
        status: true,
        draft: true,
        name: true
      }
    });
    return orders;
  }
}

export { ListOrderService };
