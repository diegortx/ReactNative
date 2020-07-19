const express = require ('express');
const server = express();

server.use(express.json());



const TaskRouter = require('./routes/TaskRoutes');

server.use('/task', TaskRouter);

server.listen(3000, () => {
    console.log ("Api ONLINE");
});