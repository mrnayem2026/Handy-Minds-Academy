import mongoose from 'mongoose';
import { TStudent } from './student.interface';
import { StudentModel } from './student.model';
import { AppError } from '../../errors/AppError';
import httpStatus from 'http-status';
import { User } from '../user/user.model';
import { studentSearchableFields } from './student.constant';

// Retrive all student information. and throw response in client
const getAllStudent = async (query: Record<string, unknown>) => {
  let searchTerm = '';

  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const result = await StudentModel.find({
    $or: studentSearchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  }).populate('admissionSemester');
  return result;
};

// Retrive one student information. and throw response in client
const getSingleStudentData = async (
  studentId: string,
): Promise<TStudent | null> => {
  const singleStudentData = await StudentModel.findById(studentId);
  return singleStudentData;
};

// Update Single student data

const updateSingleStudentData = async (
  studentId: string,
  studentUpdateData: TStudent,
): Promise<TStudent | null> => {
  const updateData = await StudentModel.findByIdAndUpdate(
    studentId,
    studentUpdateData,
  );
  return updateData;
};

// Delete Single Student data
const deleteSingleStudentData = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedStudent = await StudentModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete student');
  }
};

export const studentServices = {
  getAllStudent,
  getSingleStudentData,
  updateSingleStudentData,
  deleteSingleStudentData,
};
