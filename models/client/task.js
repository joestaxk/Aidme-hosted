const { Schema, model, ObjectId } = require('mongoose');
const User = require('../../models/client/user')


// Address Schema
const AddressSchema = new Schema({
  _id: ObjectId,
  street: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  zipCode: {
    type: String,
  },
});

// Task Option Schema
const TaskOptionSchema = new Schema({
  _id: ObjectId,
  size: {
      type: String,
      required: true,
      enum: ['small', 'medium', 'large'],
  }

});


// Task Schema
const TaskSchema = new Schema({
  _id: ObjectId,
  user: {
    type: ObjectId,
    ref: 'User'
  },
  startAddress: {
    type: ObjectId,
    ref: 'Address'
  },
  endAddress: {
    type: ObjectId,
    ref: 'Address'
  },
  taskOption: {
    type: ObjectId,
    ref: 'TaskOption'
  },
  vehicleRequirement: {
    type: String,
    enum: ['none', 'car', 'truck']
  },
  taskDetail: {
    type: String,
    required: true
  },
  dueDate: {
    type: String
  },
  status: {
    type: String,
    enum: ['in progress', 'completed'],
  },
  budget: {
    amount: {
      type: Number
    },
    currency: {
      type: String,
      default: "usd"
    }
  }
}, { 
  timestamps: { 
    createdAt: 'created_at',
   updatedAt: 'updated_at' 
  }
});


const Task = model('Task', TaskSchema);
const TaskOption = model('TaskOption', TaskOptionSchema);
const Address = model('Address', AddressSchema);

module.exports = { Task, TaskOption, Address };

