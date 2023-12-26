import express from 'express';
import { AdminControllers } from './admin.controllers';
import validateRequest from '../../midellwares/validateRequest';
import { updateAdminValidationSchema } from './admin.validation.zod';


const router = express.Router();

router.get('/', AdminControllers.getAllAdmins);

router.get('/:id', AdminControllers.getSingleAdmin);

router.patch(
  '/:id',
  validateRequest(updateAdminValidationSchema),
  AdminControllers.updateAdmin,
);

router.delete('/:adminId', AdminControllers.deleteAdmin);

export const AdminRoutes = router;
