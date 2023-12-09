import { Request, Response } from 'express';
import catchAsync from '../../utility/catchAsync';
import { AcademicFacultyServices } from './academicFaculty.services';
import sendResponse from '../../utility/sendResponse';
import httpStatus from 'http-status';

const createAcademicFacultyIntoDB = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
      req.body,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty is created succesfully',
      data: result,
    });
  },
);

const getAllAcademicFacultiesFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicFacultyServices.getAllAcademicFacultiesFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculties are retrieved successfully',
      data: result,
    });
  },
);

const getSingleAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { facultyId } = req.params;
    const result =
      await AcademicFacultyServices.getSingleAcademicFacultyFromDB(facultyId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty is retrieved succesfully',
      data: result,
    });
  },
);

const updateAcademicFacultyIntoDB = catchAsync(
  async (req: Request, res: Response) => {
    const { facultyId } = req.params;
    const payload = req.body;

    const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(
      facultyId,
      payload,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty is updated succesfully',
      data: result,
    });
  },
);

export const AcademicFacultyControllers = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultiesFromDB,
  getSingleAcademicFaculty,
  updateAcademicFacultyIntoDB,
};
