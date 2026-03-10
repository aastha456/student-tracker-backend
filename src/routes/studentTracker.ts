import { validateQueryParams, validateRequestParams } from './../middlewares/validator';
import { Router } from 'express';
import * as studentTrackerController from '../controllers/studentTracker';
import { validateRequestBody } from '../middlewares/validator';
import { createStudentSchema, fetchAllQuerySchema, fetchIdParamSchema } from '../schemas/studentTracker';
const router = Router();

router.get('/', validateQueryParams(fetchAllQuerySchema), studentTrackerController.fetchAll);

router.post('/', validateRequestBody(createStudentSchema), studentTrackerController.createStudent);

router.get('/:id', validateRequestParams(fetchIdParamSchema), studentTrackerController.fetchStudentById);

router.delete('/:id', validateRequestParams(fetchIdParamSchema), studentTrackerController.deleteStudentById);

router.put('/:id', validateRequestParams(fetchIdParamSchema), validateRequestBody(createStudentSchema), studentTrackerController.updateStudentById);
export default router;
