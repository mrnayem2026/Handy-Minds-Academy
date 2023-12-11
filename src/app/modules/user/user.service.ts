import httpStatus from 'http-status';
import config from '../../config';
import { AppError } from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import TUser from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import mongoose from 'mongoose';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // set password default password , if user not given password
  userData.password = password || (config.DEFAULT_PASSWORD as string);

  //set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  // Throw Error when we don't get admissionSemester id
  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }

  //set  generated id
  userData.id = await generateStudentId(admissionSemester);

  // create session
  const session = await mongoose.startSession();

  try {
    // start session transection
    session.startTransaction();

    // create a new user
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'User Created failed');
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    //create a student
    const newStudent = await StudentModel.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to cretate student');
    }

    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
  }
};

export const userServices = {
  createStudentIntoDB,
};
