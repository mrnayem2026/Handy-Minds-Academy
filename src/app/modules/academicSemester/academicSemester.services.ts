import { TAcademicSemester } from './academicSemester.interface';
import { academicSemesterModel } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  const result = await academicSemesterModel.create(payload);
  return result;
};

const getAllAcademicSemestersFromDB = async () => {
  const result = await academicSemesterModel.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (semesterId: string) => {
  const result = await academicSemesterModel.findById(semesterId);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  semesterId: string,
  payload: Partial<TAcademicSemester>,
) => {
  const result = await academicSemesterModel.findByIdAndUpdate(
    semesterId,
    payload,
  );

  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
