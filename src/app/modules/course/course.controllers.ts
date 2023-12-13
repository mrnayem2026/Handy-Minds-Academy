import { Request, Response } from 'express';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { CourseServices } from './course.services';
import httpStatus from 'http-status';

const createCourseIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.createCourseIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is created succesfully',
    data: result,
  });
});

const getAllCoursesFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.getAllCoursesFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course are retrieved successfully',
    data: result,
  });
});

const getSingleCourseFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const { facultyId } = req.params;
    const result = await CourseServices.getSingleCourseFromDB(facultyId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course is retrieved succesfully',
      data: result,
    });
  },
);

const deleteCourseFromDB = catchAsync(async (req: Request, res: Response) => {
  const { courseId } = req.params;

  const result = await CourseServices.deleteCourseFromDB(courseId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is updated succesfully',
    data: result,
  });
});

export const CourseControllers = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  deleteCourseFromDB,
};
