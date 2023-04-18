import { Request, Response } from "express";
import { FishOrderService } from "../../services/order/FinishOrderService";

class FinishOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;
    const fishOrder = new FishOrderService();
    const order = await fishOrder.execute({
      order_id,
    });

    return res.json(order);
  }
}

export { FinishOrderController };
