import { QueryBuilder } from '../../builders/QueryBuilder';
import { courceSearchableFields } from './course.constant';
import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDB = async (payload: TCourse) => {
  const result = (await Course.create(payload)).populate(
    'preRequisteCourses.course',
  );
  return result;
};

const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const courceQuery = new QueryBuilder(
    Course.find().populate('preRequisteCourses.course'),
    query,
  )
    .search(courceSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await courceQuery.modelQuery;
  return result;
};

const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};

const updateCourseIntoDB = async (id: string, payload: Partial<TCourse>) => {
  const { preRequisteCourses, ...courseRemainingData } = payload;

  const updatedBasicCourseInfo = await Course.findByIdAndUpdate(
    id,
    courseRemainingData,
    {
      new: true,
      runValidators: true,
    },
  );

  if (preRequisteCourses && preRequisteCourses.length > 0) {
    const deletedPreRequisites = preRequisteCourses
    .filter((el) => el.course && el.isDeleted)
    .map((el) => el.course);

    console.log({deletedPreRequisites});
  const deletedPreRequisiteCourses = await Course.findByIdAndUpdate(
    id,
    {
      $pull: {
        preRequisteCourses: { course: { $in: deletedPreRequisites } },
      },
    },
    {
      new: true,
      runValidators: true,
    },
  );

  
  }

  return updatedBasicCourseInfo;
};

const deleteCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  deleteCourseFromDB,
  updateCourseIntoDB,
};
