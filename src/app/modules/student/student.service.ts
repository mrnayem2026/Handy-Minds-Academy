import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

// Crerate Student and Store Data in Mongoodb using Mongoose
const createStudentIntoDB = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};

// Retrive all student information. and throw response in client
const getAllStudent = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentData = async (
  studentId: string,
): Promise<TStudent | null> => {
  const singleStudentData = await StudentModel.findById(studentId);
  return singleStudentData;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudent,
  getSingleStudentData,
};
