
# Task Management System

This is a Node.js-based task management system that provides APIs for managing managers, agents, and orders, along with real-time features powered by Socket.IO.

## Features

- Manager Management:
  - Add new managers.
  - Retrieve manager details by ID.

- Agent Management:
  - Add new agents.
  - Retrieve orders assigned to a specific agent.

- Order Management:
  - Add new orders.
  - Retrieve all orders.
  - Update or delete orders by ID.

- Real-time Communication:
  - Powered by Socket.IO for live updates.

## Prerequisites

- Node.js (v16 or later)
- MySQL Database
- npm (comes with Node.js)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/ibrahimabdalrhman/simple_Socket.io_example.git
   cd task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=yourdatabase
   ```

   Replace `yourpassword` and `yourdatabase` with your MySQL credentials.

4. Set up the database:

   If using Prisma:

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

   If using Sequelize:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the server:

   - For development (auto-reload enabled):

     ```bash
     npx nodemon app.js
     ```

   - For production:

     ```bash
     node app.js
     ```

6. Access the application:

   Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Manager Routes

- `POST /api/managers/new-manager`: Add a new manager.
- `GET /api/managers/:id`: Retrieve manager details by ID.

### Agent Routes

- `POST /api/agents/new-agent`: Add a new agent.
- `GET /api/agents/:id`: Retrieve orders assigned to a specific agent.

### Order Routes

- `POST /api/orders/new-order`: Add a new order.
- `GET /api/orders/all-orders`: Retrieve all orders.
- `PATCH /api/orders/update-order/:id`: Update an order by ID.
- `DELETE /api/orders/delete-order/:id`: Delete an order by ID.

## Real-time Features

- Socket.IO enables live updates for connected clients.
- Logs user connections and disconnections.

## Technologies Used

- **Backend Framework:** Express.js
- **Database:** MySQL with Prisma and Sequelize
- **Real-time Communication:** Socket.IO
- **Environment Management:** dotenv

## Future Enhancements

- Add authentication and authorization using JWT.
- Implement request validation with Joi or express-validator.
- Enhance error handling and logging.

## License

This project is licensed under the ISC License.
