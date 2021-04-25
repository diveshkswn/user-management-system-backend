const UserModel = require('../models/UserModel');

async function getAllUsers(req, res) {
  try {
    const responseData = await UserModel.find();
    res.status(201).json({
      success: 'true',
      data: responseData,
    });
  } catch (error) {
    res.status(400).json({
      success: 'false',
      data: error,
    });
  }
}

async function addUser(req, res) {
  try {
    const responseData = await UserModel.create(req.body);

    res.status(201).json({
      success: 'true',
      data: responseData,
    });
  } catch (error) {
    res.status(400).json({
      success: 'false',
      data: error,
    });
  }
}

async function deleteUser(req, res) {
  try {
    const userID = req.params.id;
    const responseData = await UserModel.find({ id: userID });
    if (!responseData || responseData.length === 0) {
      res.status(404).json({
        status: false,
        data: `User with id ${userID} not found`,
      });
    } else {
      res.status(201).json({
        success: 'true',
        data: responseData,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: 'false',
      data: error,
    });
  }
}

module.exports = { getAllUsers, addUser, deleteUser };
