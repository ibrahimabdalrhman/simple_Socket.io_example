const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.newAgent = async (req, res) => {
  const data = req.body;
  console.log(data);
  const agent = await prisma.agent.create({ data });
  res.json(agent);
};

exports.showOrdersAssigned = async (req, res) => {
  const { id } = req.params;

  try {
    const orders = await prisma.order.findMany({
      where: { agentId: parseInt(id) },
    });

    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};