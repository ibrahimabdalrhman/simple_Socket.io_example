const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.newOrder = async (req, res) => {
  const data = req.body;
  console.log(data);
  const order = await prisma.order.create({ data });

  // Emit event for new order
  const io = req.app.get("io");
  io.emit("order_created", order);

  res.json(order);
};

exports.getAll = async (req, res) => {
  const orders = await prisma.order.findMany({
    include: { manger: true, agent: true },
  });
  res.json(orders);
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const { agentId } = req.body;

  try {
    const updatedOrder = await prisma.order.update({
      where: { id: parseInt(id) },
      data: { agentId: parseInt(agentId) },
    });

    // Emit real-time update
    const io = req.app.get("io");
    io.emit("order_updated", updatedOrder);

    res.json(updatedOrder);
  } catch (err) {
    console.error("Error updating order:", err);
    res.status(500).json({ error: "Failed to update order" });
  }
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.order.delete({
      where: { id: parseInt(id) },
    });

    // Emit real-time update
    const io = req.app.get("io");
    io.emit("order_deleted");

    return res.status(204).end();
  } catch (err) {
    console.error("Error deleting order:", err);
    res.status(500).json({ error: "Failed to delete order" });
  }
};
