import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { studentServices } from './student.service';
import sendResponse from '../../utility/sendResponse';

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllStudent();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Retrive Successfull',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudentData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.studentId;
    const singleStudentData =
      await studentServices.getSingleStudentData(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Student data retrive Successfull',
      data: singleStudentData,
    });
  } catch (error) {
    next(error);
  }
};

const updateSingleStudentData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.studentId;
    const updateData = req.body;

    const result = await studentServices.updateSingleStudentData(
      studentId,
      updateData,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student data update successfull',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSingleStudentData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.studentId;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await studentServices.deleteSingleStudentData(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student data deleted successfull',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentControler = {
  getAllStudent,
  getSingleStudentData,
  updateSingleStudentData,
  deleteSingleStudentData,
};
