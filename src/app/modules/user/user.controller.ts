import { Request, Response } from "express";
import { userServices } from "./user.service";


const createStudent = async (req: Request, res: Response) => {
    try {
      const {password, student:studentData} = req.body;
       
      const result = await userServices.createStudentIntoDB(password,studentData)
  
      res.status(200).json({
        success: true,
        message: 'User and Student Created Succeccfull ',
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong from create a User and Student',
        error: error,
      });
    }
  };


export const userController = {
    createStudent
}