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

async function getUserById(req, res) {
  try {
    const userID = req.params.id;
    const responseData = await UserModel.findOne({ id: userID });
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

async function deleteUserById(req, res) {
  try {
    const userId = req.params.id;
    const responseData = await UserModel.findOne({ id: userId });
    if (!responseData || responseData.length === 0) {
      res.status(404).json({
        status: false,
        data: `User with id ${userId} not found`,
      });
    } else {
      responseData.remove();
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

async function updateUserById(req, res) {
  try {
    const userId = req.params.id;
    let responseData = await UserModel.findOne({ id: userId });
    if (!responseData || responseData.length === 0) {
      res.status(404).json({
        status: false,
        data: `User with id ${userId} not found`,
      });
    } else {
      responseData = await UserModel.findOneAndUpdate({ id: userId }, req.body,
        { new: true, runValidators: true });
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

module.exports = {
  getAllUsers, getUserById, addUser, deleteUserById, updateUserById,
};
