const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.newManager = async (req, res) => {
  const data = req.body;
  console.log(data);
  const manager =await  prisma.manager.create({data:{
    email:data.email,
    name:data.name,
    phone:data.phone
  }});
  res.json(manager);
};

exports.managerById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const manager = await prisma.manager.findUnique({ where: { id: parseInt(id) } });
    res.json(manager);
  };
  

