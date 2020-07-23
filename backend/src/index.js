const express = require ('express');
const cors = require ('cors');
const server = express();

server.use(cors());
server.use(express.json());



const TaskRouter = require('./routes/TaskRoutes');

server.use('/task', TaskRouter);

server.listen(3333, () => {
    console.log ("Api ONLINE");
});