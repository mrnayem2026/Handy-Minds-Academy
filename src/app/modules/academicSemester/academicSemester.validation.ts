import { z } from 'zod';
import { AcademicSemesterCode, AcademicSemesterMonth, AcademicSemesterName } from './academicSemester.constant';


const createAcdemicSemesterValidationSchema= z.object({
    body : z.object({
        name: z.enum([...AcademicSemesterName] as [string, ...string[]]).optional(),
        year: z.string().optional(),
        code: z.enum([...AcademicSemesterCode] as [string, ...string[]]).optional(),
        startMonth: z.enum([...AcademicSemesterMonth]as [string, ...string[]]).optional(),
        endMonth: z.enum([...AcademicSemesterMonth]as [string, ...string[]]).optional()
    })
})

export const AcademicSemesterValidations = {
    createAcdemicSemesterValidationSchema
}