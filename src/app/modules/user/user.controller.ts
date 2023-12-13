import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.service';
import sendResponse from '../../utility/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await userServices.createStudentIntoDB(
      password,
      studentData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User and Student Created Succeccfull ',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createFacultyIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, faculty} = req.body;

    const result = await userServices.createFacultyIntoDB(
      password,
      faculty,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User and faculty create successful',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createStudent,
  createFacultyIntoDB,
};
