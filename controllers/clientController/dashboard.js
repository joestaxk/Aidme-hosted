
const httpStatus = require('http-status');
const mongoose= require('mongoose');
const Client = require('../../models/client/user');
const { filterObjectData } = require('../../utils/helpers');
const { Task, Address, TaskOption } = require('../../models/client/task');
const {ClientAuth} = require('../../middlewares/auth');



let dashboardController = {};


dashboardController.createTask = async function(req,res) {
    try {
        const { startAddress,
             endAddress, taskOption, taskDetail, vehicleRequirement, dueDate, status, budget } = req.body;
       // Create start and end addresses
       const startAddressDoc = await Address.create({
        _id: new mongoose.Types.ObjectId(),
        ...startAddress
      });
      
      const endAddressDoc = await Address.create({
        _id: new mongoose.Types.ObjectId(),
        ...endAddress
      });

       // Get the user ID from the JWT authorization key
       const userId = req.id;
       const userEmail= req.email;
        console.log(userEmail);

        
        // Create task option 
        const taskOptionDoc = await TaskOption.create({
            _id: new mongoose.Types.ObjectId(),
            ...taskOption
          });
        console.log("Dickens cidar");

        //Create the task
        const task = new Task({
            _id: new mongoose.Types.ObjectId(),
            startAddress: startAddressDoc,
            endAddress: endAddressDoc,
            taskOption: taskOptionDoc,
            user : userId,
            taskDetail,
            vehicleRequirement,
            dueDate,
            status,
            budget
        });
    
        await task.save();

        res.status(httpStatus.CREATED).json(task);
    } catch (err) {
       console.error(err);
       res.status(httpStatus.BAD_REQUEST).send(err);
   }
}


module.exports = dashboardController;
