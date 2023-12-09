import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";


const academicDevpartmentSchema = new Schema<TAcademicDepartment>(
    {
        name: {
            type:String,
            required: [true, 'Academic Department Name is rquired'],
            unique : true
        },
        academicFaculty : {
            type:Schema.Types.ObjectId,
            ref:'AcademicFaculty'
        }
    },
    {
        timestamps: true
    }
)

export const AcademicDepartment = model<TAcademicDepartment>('AcademicDepartment',academicDevpartmentSchema)