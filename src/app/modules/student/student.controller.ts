import { Request, Response } from 'express';
import { studentServices } from './student.service';



const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudent();

    res.status(200).json({
      success: true,
      message: 'Student Retrive Successfull',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getSingleStudentData = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const singleStudentData =
      await studentServices.getSingleStudentData(studentId);
    res.status(200).json({
      success: true,
      message: 'Single Student data retrive Successfull',
      data: singleStudentData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const updateSingleStudentData = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const updateData = req.body;

    const result = await studentServices.updateSingleStudentData(
      studentId,
      updateData,
    );

    res.status(200).json({
      success: true,
      message: 'Student data update successfull',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const deleteSingleStudentData = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await studentServices.deleteSingleStudentData(studentId);
    res.status(200).json({
      success: true,
      message: 'Student data deleted successfull',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

export const studentControler = {
  getAllStudent,
  getSingleStudentData,
  updateSingleStudentData,
  deleteSingleStudentData,
};
