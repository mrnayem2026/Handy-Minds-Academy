import { Student } from './student.interface';
import { StudentModel } from './student.model';

// Crerate Student and Store Data in Mongoodb using Mongoose
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// Retrive all student information. and throw response in client
const getAllStudent = async () => {
  const result = await StudentModel.find();
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudent,
};
