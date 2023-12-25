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

const getAllSemesterRegistrationsFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationService.getAllSemesterRegistrationsFromDB(
        req.query,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration is retrieved successfully !',
      data: result,
    });
  },
);

const getSingleSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result =
      await SemesterRegistrationService.getSingleSemesterRegistrationsFromDB(
        id,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration is retrieved successfully',
      data: result,
    });
  },
);

const updateSemesterRegistration = catchAsync(
    async (req: Request, res: Response) => {
      const { id } = req.params;
      const result =
        await SemesterRegistrationService.updateSemesterRegistrationIntoDB(
          id,
          req.body,
        );
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester Registration is updated successfully',
        data: result,
      });
    },
  )
export const SemesterRegistrationControllers = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsFromDB,
  getSingleSemesterRegistration,
  updateSemesterRegistration
};
