import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { studentServices } from './student.service';
import sendResponse from '../../utility/sendResponse';
import catchAsync from '../../utility/catchAsync';

const getAllStudent: RequestHandler = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudent();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Retrive Successfull',
    data: result,
  });
});
const getSingleStudentData: RequestHandler = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;
  const singleStudentData =
    await studentServices.getSingleStudentData(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Student data retrive Successfull',
    data: singleStudentData,
  });
});

const updateSingleStudentData: RequestHandler = catchAsync(async (req, res) => {
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
});

const deleteSingleStudentData: RequestHandler = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result = await studentServices.deleteSingleStudentData(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student data deleted successfull',
    data: result,
  });
});

export const studentControler = {
  getAllStudent,
  getSingleStudentData,
  updateSingleStudentData,
  deleteSingleStudentData,
};
