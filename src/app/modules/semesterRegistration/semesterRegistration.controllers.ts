import { Request, Response } from 'express';
import catchAsync from '../../utility/catchAsync';
import { SemesterRegistrationService } from './semesterRegistration.services';
import sendResponse from '../../utility/sendResponse';
import httpStatus from 'http-status';

const createSemesterRegistrationIntoDB = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;

    const result =
      await SemesterRegistrationService.createSemesterRegistrationIntoDB(
        payload,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration is created successfully!',
      data: result,
    });
  },
);

export const SemesterRegistrationControllers = {
  createSemesterRegistrationIntoDB,
};
