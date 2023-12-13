import { Types } from 'mongoose';

export type TPreRequisteCoure = {
  course: Types.ObjectId;
  isDeleted: boolean;
};

export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  isDeleted?: boolean;
  preRequisteCourses: [TPreRequisteCoure];
};
