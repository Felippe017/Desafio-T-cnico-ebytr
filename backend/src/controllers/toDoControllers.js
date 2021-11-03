const { StatusCodes } = require('http-status-codes');
const {
  createTasks, getAll, getByid, updateTask, deleteTask,
} = require('../models/toDoModel');

const createTask = async (req, res) => {
  const { task, statusTask } = req.body;

  const tasks = await createTasks({ task, statusTask });

  return res.status(StatusCodes.CREATED).json({ tasks });
};

const getAllTasks = async (_req, res) => {
  const tasks = await getAll();
  return res.status(StatusCodes.OK).json(tasks);
};

const getByIdTask = async (req, res) => {
  const id = req.params;
  const tasks = await getByid({ id });
  return res.status(StatusCodes.OK).json(tasks);
};

const updatedTask = async (req, res) => {
  const { task, statusTask } = req.body;
  const id = req.params;
  const tasks = await updateTask({ task, statusTask }, id);
  return res.status(StatusCodes.OK).json(tasks);
};

const deletedTask = async (req, res) => {
  const id = req.params;
  const tasks = await deleteTask({ id });
  return res.status(StatusCodes.OK).json(tasks);
};

module.exports = {
  createTask,
  getAllTasks,
  getByIdTask,
  updatedTask,
  deletedTask,
};
